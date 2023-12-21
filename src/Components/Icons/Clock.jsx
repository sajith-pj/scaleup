import React from "react";

const Clock = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      {...props}
    >
      <path
        d="M58.7812 61.5586C60.3281 59.9648 61.6992 58.2539 62.8945 56.4258C64.0898 54.5977 65.0977 52.6758 65.918 50.6602C66.7383 48.6445 67.3594 46.5586 67.7812 44.4023C68.2031 42.2461 68.4141 40.043 68.4141 37.793C68.4141 35.6367 68.2148 33.5273 67.8164 31.4648C67.418 29.4023 66.8555 27.4102 66.1289 25.4883C65.4023 23.5664 64.4883 21.7148 63.3867 19.9336C62.2852 18.1523 61.0312 16.4648 59.625 14.8711L62.0859 12.4102L64.4062 14.7305C64.5938 14.918 64.793 15.0586 65.0039 15.1523C65.2148 15.2461 65.4375 15.293 65.6719 15.293C65.9062 15.293 66.1406 15.2461 66.375 15.1523C66.6094 15.0586 66.7969 14.918 66.9375 14.7305C67.3125 14.4023 67.5 13.9922 67.5 13.5C67.5 13.0078 67.3125 12.5742 66.9375 12.1992L59.7656 5.02734C59.4375 4.65234 59.0156 4.46484 58.5 4.46484C57.9844 4.46484 57.5625 4.65234 57.2344 5.02734C56.8594 5.35547 56.6719 5.76562 56.6719 6.25781C56.6719 6.75 56.8594 7.18359 57.2344 7.55859L59.5547 9.87891L57.0938 12.3398C55.5 10.9336 53.8125 9.67969 52.0312 8.57812C50.25 7.47656 48.3984 6.5625 46.4766 5.83594C44.5547 5.10938 42.5625 4.54688 40.5 4.14844C38.4375 3.75 36.3281 3.55078 34.1719 3.55078C32.0625 3.55078 29.9766 3.75 27.9141 4.14844C25.8516 4.54688 23.8594 5.10938 21.9375 5.83594C20.0156 6.5625 18.1641 7.47656 16.3828 8.57812C14.6016 9.67969 12.9141 10.9336 11.3203 12.3398L8.85938 9.87891L11.1797 7.55859C11.5078 7.18359 11.6719 6.75 11.6719 6.25781C11.6719 5.76562 11.5078 5.35547 11.1797 5.02734C10.8047 4.65234 10.3711 4.46484 9.87891 4.46484C9.38672 4.46484 8.97656 4.65234 8.64844 5.02734L1.40625 12.1992C1.07812 12.5742 0.914062 13.0078 0.914062 13.5C0.914062 13.9922 1.07812 14.4023 1.40625 14.7305C1.59375 14.918 1.79297 15.0586 2.00391 15.1523C2.21484 15.2461 2.4375 15.293 2.67188 15.293C2.90625 15.293 3.14062 15.2461 3.375 15.1523C3.60938 15.0586 3.79688 14.918 3.9375 14.7305L6.32812 12.4102L8.78906 14.8711C7.38281 16.4648 6.12891 18.1523 5.02734 19.9336C3.92578 21.7148 3 23.5664 2.25 25.4883C1.5 27.4102 0.9375 29.4023 0.5625 31.4648C0.1875 33.5273 0 35.6367 0 37.793C0 40.043 0.210938 42.2461 0.632812 44.4023C1.05469 46.5586 1.67578 48.6445 2.49609 50.6602C3.31641 52.6758 4.32422 54.5977 5.51953 56.4258C6.71484 58.2539 8.08594 59.9648 9.63281 61.5586L2.32031 68.8711C1.99219 69.2461 1.82812 69.6797 1.82812 70.1719C1.82812 70.6641 1.99219 71.0977 2.32031 71.4727C2.50781 71.6133 2.70703 71.7305 2.91797 71.8242C3.12891 71.918 3.35156 71.9648 3.58594 71.9648C3.82031 71.9648 4.05469 71.918 4.28906 71.8242C4.52344 71.7305 4.71094 71.6133 4.85156 71.4727L12.3047 64.0195C13.8047 65.332 15.4219 66.4805 17.1562 67.4648C18.8906 68.4492 20.6836 69.2695 22.5352 69.9258C24.3867 70.582 26.2852 71.0859 28.2305 71.4375C30.1758 71.7891 32.1562 71.9648 34.1719 71.9648C36.2344 71.9648 38.2383 71.7891 40.1836 71.4375C42.1289 71.0859 44.0273 70.582 45.8789 69.9258C47.7305 69.2695 49.5117 68.4492 51.2227 67.4648C52.9336 66.4805 54.5625 65.332 56.1094 64.0195L63.4922 71.4727C63.6797 71.6133 63.8906 71.7305 64.125 71.8242C64.3594 71.918 64.5938 71.9648 64.8281 71.9648C65.0625 71.9648 65.2852 71.918 65.4961 71.8242C65.707 71.7305 65.9062 71.6133 66.0938 71.4727C66.4219 71.0977 66.5859 70.6641 66.5859 70.1719C66.5859 69.6797 66.4219 69.2461 66.0938 68.8711L58.7812 61.5586ZM3.58594 37.793C3.58594 33.5742 4.39453 29.6016 6.01172 25.875C7.62891 22.1484 9.82031 18.9023 12.5859 16.1367C15.3516 13.3711 18.5859 11.1914 22.2891 9.59766C25.9922 8.00391 29.9531 7.20703 34.1719 7.20703C38.3906 7.20703 42.3633 8.00391 46.0898 9.59766C49.8164 11.1914 53.0625 13.3711 55.8281 16.1367C58.5938 18.9023 60.7852 22.1484 62.4023 25.875C64.0195 29.6016 64.8281 33.5742 64.8281 37.793C64.8281 42.0117 64.0195 45.9727 62.4023 49.6758C60.7852 53.3789 58.5938 56.6133 55.8281 59.3789C53.0625 62.1445 49.8164 64.3359 46.0898 65.9531C42.3633 67.5703 38.3906 68.3789 34.1719 68.3789C29.9531 68.3789 25.9922 67.5703 22.2891 65.9531C18.5859 64.3359 15.3516 62.1445 12.5859 59.3789C9.82031 56.6133 7.62891 53.3789 6.01172 49.6758C4.39453 45.9727 3.58594 42.0117 3.58594 37.793ZM54.4922 26.0508C54.2109 25.6289 53.8359 25.3594 53.3672 25.2422C52.8984 25.125 52.4531 25.1836 52.0312 25.418L34.3125 35.6133L20.4609 25.9805C20.0859 25.6992 19.6523 25.6055 19.1602 25.6992C18.668 25.793 18.2812 26.0273 18 26.4023C17.7188 26.8242 17.6133 27.2812 17.6836 27.7734C17.7539 28.2656 18 28.6523 18.4219 28.9336L33.1875 39.2695C33.1875 39.2695 33.1992 39.2812 33.2227 39.3047C33.2461 39.3281 33.2578 39.3398 33.2578 39.3398C33.2578 39.3398 33.2812 39.3398 33.3281 39.3398C33.3281 39.3398 33.3398 39.3398 33.3633 39.3398C33.3867 39.3398 33.3984 39.3633 33.3984 39.4102C33.4453 39.4102 33.4688 39.4102 33.4688 39.4102C33.4688 39.4102 33.4922 39.4336 33.5391 39.4805C33.5391 39.4805 33.5508 39.4805 33.5742 39.4805C33.5977 39.4805 33.6094 39.4805 33.6094 39.4805C33.6562 39.4805 33.6797 39.4805 33.6797 39.4805C33.6797 39.4805 33.7031 39.4805 33.75 39.4805C33.75 39.4805 33.75 39.4922 33.75 39.5156C33.75 39.5391 33.75 39.5508 33.75 39.5508C33.75 39.5508 33.7617 39.5508 33.7852 39.5508C33.8086 39.5508 33.8203 39.5508 33.8203 39.5508C33.8203 39.5508 33.832 39.5508 33.8555 39.5508C33.8789 39.5508 33.8906 39.5508 33.8906 39.5508C33.8906 39.5508 33.9023 39.5508 33.9258 39.5508C33.9492 39.5508 33.9609 39.5508 33.9609 39.5508C33.9609 39.5508 33.9727 39.5508 33.9961 39.5508C34.0195 39.5508 34.0312 39.5508 34.0312 39.5508C34.0312 39.5508 34.0547 39.5508 34.1016 39.5508C34.1016 39.5508 34.1133 39.5508 34.1367 39.5508C34.1602 39.5508 34.1719 39.5508 34.1719 39.5508C34.2188 39.5508 34.2656 39.5508 34.3125 39.5508C34.3594 39.5508 34.3828 39.5508 34.3828 39.5508C34.4297 39.5508 34.4766 39.5508 34.5234 39.5508C34.5703 39.5508 34.5938 39.5508 34.5938 39.5508C34.6406 39.5508 34.6758 39.5391 34.6992 39.5156C34.7227 39.4922 34.7578 39.4805 34.8047 39.4805C34.8516 39.4336 34.8867 39.4102 34.9102 39.4102C34.9336 39.4102 34.9688 39.4102 35.0156 39.4102C35.0156 39.4102 35.0156 39.3984 35.0156 39.375C35.0156 39.3516 35.0156 39.3398 35.0156 39.3398C35.0625 39.3398 35.0859 39.3398 35.0859 39.3398L53.7891 28.5117C54.2109 28.2773 54.4922 27.9258 54.6328 27.457C54.7734 26.9883 54.7266 26.5195 54.4922 26.0508Z"
        // fill="#7A0996"
      />
    </svg>
  );
};

export default Clock;
