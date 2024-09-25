export const constant = {
    API_URL: import.meta.env.VITE_API_URL,
    APP_NAME: import.meta.env.VITE_APP_NAME || 'Crontrack',
    role: {
        admin: 'admin',
        manager: "manager",
        contentCreator: "content-creator",
        analyst: "analyst",
        viewer: "viewer"
    }
}