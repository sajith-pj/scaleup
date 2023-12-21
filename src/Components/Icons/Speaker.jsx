import React from "react";

const Speaker = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="72"
      height="72"
      viewBox="0 0 72 72"
      {...props}
    >
      <path
        d="M69.8203 11.1445C68.7422 8.00391 67.582 5.95312 66.3398 4.99219C65.0977 4.03125 63.9844 3.55078 63 3.55078C63 3.55078 62.9883 3.55078 62.9648 3.55078C62.9414 3.55078 62.9062 3.55078 62.8594 3.55078C61.875 3.59766 60.4922 3.85547 58.7109 4.32422C56.9297 4.79297 54.7031 5.42578 52.0312 6.22266C49.2656 7.01953 46.1719 7.89844 42.75 8.85938C39.3281 9.82031 35.6836 10.7109 31.8164 11.5312C27.9492 12.3516 23.9414 13.0312 19.793 13.5703C15.6445 14.1094 11.4375 14.3789 7.17188 14.3789C5.15625 14.3789 3.45703 15.5859 2.07422 18C0.691406 20.4141 0 23.4023 0 26.9648C0 30.5742 0.691406 33.5742 2.07422 35.9648C3.45703 38.3555 5.15625 39.5508 7.17188 39.5508C7.875 39.5508 8.55469 39.5625 9.21094 39.5859C9.86719 39.6094 10.5234 39.6445 11.1797 39.6914L17.1562 63.5273C17.5312 64.8867 18.3164 66.0352 19.5117 66.9727C20.707 67.9102 22.0078 68.3789 23.4141 68.3789H28.125C28.9219 68.3789 29.6367 68.2266 30.2695 67.9219C30.9023 67.6172 31.4062 67.1836 31.7812 66.6211C32.1562 66.0586 32.3555 65.4258 32.3789 64.7227C32.4023 64.0195 32.2734 63.293 31.9922 62.543L22.7109 40.8164C25.5234 41.2383 28.2773 41.7305 30.9727 42.293C33.668 42.8555 36.2578 43.4414 38.7422 44.0508C41.2266 44.6602 43.582 45.293 45.8086 45.9492C48.0352 46.6055 50.1094 47.2148 52.0312 47.7773C54.7031 48.5273 56.9297 49.1484 58.7109 49.6406C60.4922 50.1328 61.875 50.3789 62.8594 50.3789C62.9062 50.3789 62.9414 50.3789 62.9648 50.3789C62.9883 50.3789 63 50.3789 63 50.3789C63.9844 50.3789 65.0977 49.8984 66.3398 48.9375C67.582 47.9766 68.7422 45.9492 69.8203 42.8555C70.5234 40.6992 71.0625 38.2617 71.4375 35.543C71.8125 32.8242 72 29.9648 72 26.9648C72 24.0117 71.8125 21.1641 71.4375 18.4219C71.0625 15.6797 70.5234 13.2539 69.8203 11.1445ZM57.5859 26.9648C57.5859 26.0742 57.6094 25.1719 57.6562 24.2578C57.7031 23.3438 57.75 22.4648 57.7969 21.6211C58.7344 21.7148 59.5312 22.2773 60.1875 23.3086C60.8438 24.3398 61.1719 25.5586 61.1719 26.9648C61.1719 28.3711 60.8438 29.6016 60.1875 30.6562C59.5312 31.7109 58.7344 32.2852 57.7969 32.3789C57.75 31.4883 57.7031 30.5977 57.6562 29.707C57.6094 28.8164 57.5859 27.9023 57.5859 26.9648ZM3.58594 26.9648C3.58594 24.2461 4.00781 22.0664 4.85156 20.4258C5.69531 18.7852 6.46875 17.9648 7.17188 17.9648C9.23438 17.9648 11.2734 17.9062 13.2891 17.7891C15.3047 17.6719 17.3203 17.4961 19.3359 17.2617C18.9141 18.6211 18.5859 20.1328 18.3516 21.7969C18.1172 23.4609 18 25.1836 18 26.9648C18 28.793 18.1172 30.5391 18.3516 32.2031C18.5859 33.8672 18.9141 35.3789 19.3359 36.7383C17.3203 36.5039 15.3047 36.3164 13.2891 36.1758C11.2734 36.0352 9.23438 35.9648 7.17188 35.9648C6.46875 35.9648 5.69531 35.1562 4.85156 33.5391C4.00781 31.9219 3.58594 29.7305 3.58594 26.9648ZM28.6875 63.9492C28.7344 64.1367 28.7578 64.2891 28.7578 64.4062C28.7578 64.5234 28.7578 64.582 28.7578 64.582C28.7109 64.6289 28.6406 64.6758 28.5469 64.7227C28.4531 64.7695 28.3125 64.793 28.125 64.793H23.4141C22.8516 64.793 22.2891 64.5703 21.7266 64.125C21.1641 63.6797 20.8125 63.1992 20.6719 62.6836L14.9766 39.9023C15.5391 39.9492 16.125 39.9961 16.7344 40.043C17.3438 40.0898 17.9531 40.1602 18.5625 40.2539L28.6875 63.9492ZM23.3438 37.2305C22.8281 36.0117 22.4062 34.5 22.0781 32.6953C21.75 30.8906 21.5859 28.9805 21.5859 26.9648C21.5859 24.9492 21.7383 23.0508 22.043 21.2695C22.3477 19.4883 22.7812 17.9648 23.3438 16.6992C26.2031 16.2773 29.0039 15.7852 31.7461 15.2227C34.4883 14.6602 37.1133 14.0625 39.6211 13.4297C42.1289 12.7969 44.5078 12.1523 46.7578 11.4961C49.0078 10.8398 51.1172 10.2305 53.0859 9.66797C53.8359 9.43359 54.5625 9.22266 55.2656 9.03516C55.9688 8.84766 56.6484 8.66016 57.3047 8.47266C57.1172 8.84766 56.9297 9.25781 56.7422 9.70312C56.5547 10.1484 56.3672 10.6289 56.1797 11.1445C55.4766 13.2539 54.9375 15.6797 54.5625 18.4219C54.1875 21.1641 54 24.0117 54 26.9648C54 29.9648 54.1875 32.8242 54.5625 35.543C54.9375 38.2617 55.4766 40.6992 56.1797 42.8555C56.3672 43.3242 56.5547 43.793 56.7422 44.2617C56.9297 44.7305 57.1172 45.1523 57.3047 45.5273C56.6484 45.3398 55.9688 45.1406 55.2656 44.9297C54.5625 44.7188 53.8359 44.4961 53.0859 44.2617C51.1172 43.6992 49.0078 43.1016 46.7578 42.4688C44.5078 41.8359 42.1289 41.2031 39.6211 40.5703C37.1133 39.9375 34.4883 39.3281 31.7461 38.7422C29.0039 38.1562 26.2031 37.6523 23.3438 37.2305ZM66.375 41.6602C65.7188 43.6758 65.0625 45.0352 64.4062 45.7383C63.75 46.4414 63.2812 46.793 63 46.793C62.7188 46.793 62.25 46.4414 61.5938 45.7383C60.9375 45.0352 60.2812 43.6758 59.625 41.6602C59.3438 40.8164 59.0859 39.9141 58.8516 38.9531C58.6172 37.9922 58.4297 36.9961 58.2891 35.9648C59.1328 35.8242 59.9531 35.5195 60.75 35.0508C61.5469 34.582 62.25 33.9492 62.8594 33.1523C63.4688 32.3086 63.9492 31.3594 64.3008 30.3047C64.6523 29.25 64.8281 28.1367 64.8281 26.9648C64.8281 25.8398 64.6523 24.7383 64.3008 23.6602C63.9492 22.582 63.4688 21.6211 62.8594 20.7773C62.25 19.9805 61.5469 19.3477 60.75 18.8789C59.9531 18.4102 59.1328 18.1289 58.2891 18.0352C58.4297 16.957 58.6172 15.9375 58.8516 14.9766C59.0859 14.0156 59.3438 13.1133 59.625 12.2695C60.2812 10.2539 60.9375 8.90625 61.5938 8.22656C62.25 7.54688 62.7188 7.20703 63 7.20703C63.2812 7.20703 63.75 7.54688 64.4062 8.22656C65.0625 8.90625 65.7188 10.2539 66.375 12.2695C67.0312 14.2383 67.5352 16.4883 67.8867 19.0195C68.2383 21.5508 68.4141 24.1992 68.4141 26.9648C68.4141 29.7773 68.2383 32.4492 67.8867 34.9805C67.5352 37.5117 67.0312 39.7383 66.375 41.6602Z"
        // fill="#"
      />
    </svg>
  );
};

export default Speaker;
