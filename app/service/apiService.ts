import { getAccessToken } from "../lib/actions";

const apiService = {

    get: async function (url: string): Promise<any> {
        console.log("get", url);
        try {
            const token = await getAccessToken();

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST || "http://localhost:8000"}${url}`,
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        'Authorization' : `Bearer ${token}`
                    },
                }
            );
            const json = await response.json();
            console.log("Response:", json);
            return json;
        } catch (err) {
            console.error("Error:", err);
            throw err;
        }
    },

    post: async function (url: string, formData: any): Promise<any> {
        console.log("post", url, formData);
        try {
            const token = await getAccessToken();
            if (!token) {
                throw new Error("No access token found. User is not authenticated.");
            }
    
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST || "http://localhost:8000"}${url}`,
                {
                    method: "POST",
                    body: formData, // Send data as FormData
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json',
                    },
                }
            );
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Server error:", errorText);
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }
    
            const json = await response.json();
            console.log("Response:", json);
            return json;
        } catch (err) {
            console.error("Error:", err);
            throw err;
        }
    },
    


    postWithoutToken : async function (url: string, formData: any): Promise<any> {
        console.log("post", url, formData);
        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_HOST || "http://localhost:8000"}${url}`,
                {
                    method: "POST",
                    body: JSON.stringify(formData), // Send data as JSON
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        
                    },
                }
            );

            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                const errorText = await response.text(); // Get the response text
                console.error("Server error:", errorText);
                throw new Error(
                    `HTTP error! status: ${response.status}, message: ${errorText}`
                );
            }

            // Try to parse the response as JSON
            const json = await response.json();
            console.log("Response:", json);
            return json;
        } catch (err) {
            console.error("Error:", err);
            throw err;
        }
    },
};

export default apiService;
