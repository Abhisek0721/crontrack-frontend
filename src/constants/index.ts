import facebook from "../assets/socialMedia/images.png"
import instagram from "../assets/socialMedia/Instagram_logo_2022.svg.webp"
import twitter from "../assets/socialMedia/twitter-667462_640.webp"
import linkedin from "../assets/socialMedia/linkedin-2815969_640 (1).jpg"

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
      ],
    SOCIAL_MEDIA_PLATEFORM: [
      {
        id: 1, value: 'facebook', label: 'Facebook', icon: facebook
      },
      {
        id: 2, value: 'instagram', label: 'Instagram', icon: instagram
      },
      {
        id: 3, value: 'twitter', label: 'Twitter', icon: twitter
      },
      {
        id: 4, value: 'linkedin', label: 'LinkedIn', icon: linkedin
      }
    ]
      

}