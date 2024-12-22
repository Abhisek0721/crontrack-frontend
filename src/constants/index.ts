export const constant = {
    API_URL: import.meta.env.VITE_API_URL,
    CONTENT_SERVICE_API_URL: import.meta.env.VITE_API_CONTENT_SERVICE_URL,
    APP_NAME: import.meta.env.VITE_APP_NAME || 'Crontrack',
    ROLE_CHOICES: [
        { value: 'admin', label: 'Admin' },
        { value: 'manager', label: 'Manager' },
        { value: 'content-creator', label: 'Content Creator' },
        { value: 'analyst', label: 'Analyst' },
        { value: 'viewer', label: 'Viewer' }
      ]
      

}