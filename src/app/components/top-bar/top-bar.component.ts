import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="top-bar">
      <p class="total-coins">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M22 8.5C22 12.09 19.09 15 15.5 15C15.33 15 15.15 14.99 14.98 14.98C14.73 11.81 12.19 9.26999 9.01999 9.01999C9.00999 8.84999 9 8.67 9 8.5C9 4.91 11.91 2 15.5 2C19.09 2 22 4.91 22 8.5Z"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15 15.5C15 19.09 12.09 22 8.5 22C4.91 22 2 19.09 2 15.5C2 11.91 4.91 9 8.5 9C8.67 9 8.84999 9.00999 9.01999 9.01999C12.19 9.26999 14.73 11.81 14.98 14.98C14.99 15.15 15 15.33 15 15.5Z"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.62 14.62L8.5 13L9.38 14.62L11 15.5L9.38 16.38L8.5 18L7.62 16.38L6 15.5L7.62 14.62Z"
              stroke="#ffffff"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        Coins 7884
      </p>
      <p class="exchange">
        <svg
          fill="#ffffff"
          width="64px"
          height="64px"
          viewBox="0 0 24 24"
          id="exchange-5"
          data-name="Flat Color"
          xmlns="http://www.w3.org/2000/svg"
          class="icon flat-color"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="secondary"
              d="M21.41,8.26l-.84,1.82a1,1,0,0,1-.91.57,1,1,0,0,1-.42-.09l-1.82-.85a1,1,0,0,1,.21-1.86A7.48,7.48,0,0,0,17,7a7.13,7.13,0,0,0-2.69-1.66,1,1,0,1,1,.62-1.9,9,9,0,0,1,3.48,2.15,8.9,8.9,0,0,1,1.31,1.69,1,1,0,0,1,1.74.94ZM9.74,18.62A7.13,7.13,0,0,1,7.05,17a6.4,6.4,0,0,1-.67-.81,1,1,0,0,0,.68-.53,1,1,0,0,0-.48-1.33l-1.82-.85a1,1,0,0,0-.76,0,1,1,0,0,0-.57.51l-.84,1.82a1,1,0,0,0,.48,1.33,1.07,1.07,0,0,0,.43.09,1,1,0,0,0,.84-.48,8.46,8.46,0,0,0,1.3,1.69,9,9,0,0,0,3.48,2.15,1.12,1.12,0,0,0,.31.05,1,1,0,0,0,.31-1.95Z"
              style="fill: #fffffffffff;"
            ></path>
            <path
              id="primary"
              d="M22,17a5,5,0,1,1-5-5A5,5,0,0,1,22,17ZM7,2a5,5,0,1,0,5,5A5,5,0,0,0,7,2Z"
              style="fill: #fffffffffff000000;"
            ></path>
          </g>
        </svg>
        Exchange 622
      </p>
      <p>1.69 T</p>
      <p class="progress">
        <svg
          weight="12px"
          height="12px"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <rect fill="white" fill-opacity="0.01"></rect>
            <path
              d="M12 29L24 17L36 29H12Z"
              fill="#fffffffffff"
              stroke="rgb(1, 241, 227)"
              stroke-width="4"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        $124.45B
        <progress id="total-amount" value="34" max="100">34%</progress>
      </p>
      <p class="progress">
        <svg
          class="bitcoin"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke=""
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 8V6M12 18V16M9 12H13C14.1046 12 15 11.1046 15 10C15 8.89543 14.1046 8 13 8H9V12ZM9 12H14C15.1046 12 16 12.8954 16 14C16 15.1046 15.1046 16 14 16H9V12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
        44%
        <progress id="bitcoin" value="34" max="100">34%</progress>
      </p>
      <p class="progress">
        <svg
          viewBox="0 0 32 32"
          id="_x3C_Layer_x3E_"
          version="1.1"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <style type="text/css">
              .st1 {
                fill: none;
                stroke: #7c93df;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-miterlimit: 10;
              }
            </style>
            <g id="Ethereum_x2C__crypto_x2C__cryptocurrency">
              <g id="XMLID_1535_">
                <polyline
                  class="st1"
                  id="XMLID_1557_"
                  points="7.3,16 16,1.5 24.7,16 16,30.5 "
                ></polyline>
                <line
                  class="st1"
                  id="XMLID_1539_"
                  x1="16"
                  x2="7.3"
                  y1="30.5"
                  y2="16"
                ></line>
                <line
                  class="st1"
                  id="XMLID_3278_"
                  x1="18.04"
                  x2="24.7"
                  y1="12.67"
                  y2="16"
                ></line>
                <line
                  class="st1"
                  id="XMLID_266_"
                  x1="7.3"
                  x2="13.95"
                  y1="16"
                  y2="12.67"
                ></line>
                <polygon
                  class="st1"
                  id="XMLID_1538_"
                  points="16,30.5 7.3,16 16,20.35 24.7,16 "
                ></polygon>
                <line
                  class="st1"
                  id="XMLID_1537_"
                  x1="16"
                  x2="16"
                  y1="19.85"
                  y2="5.5"
                ></line>
                <polygon
                  class="st1"
                  id="XMLID_1536_"
                  points="16,1.5 7.3,16 16,30.5 24.7,16 "
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
        21%
        <progress id="eth" value="34" max="100">34%</progress>
      </p>
    </div>
  `,
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {}
