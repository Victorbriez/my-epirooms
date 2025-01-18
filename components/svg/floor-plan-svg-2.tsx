"use client";

interface FloorPlanProps {
  Color: string;
  getRoomColor: (roomKey: string) => string;
}

export default function FloorPlanSVG2({ Color, getRoomColor }: FloorPlanProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1300 800"
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          patternUnits="userSpaceOnUse"
          width="11.5"
          height="11.5"
          x="0"
          y="0"
          patternTransform="rotate(45)"
          id="mx-pattern-hatch-1-636263-0"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="11.5"
            stroke="#636263"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <g>
        <g id="background">
          <rect x="0" y="0" width="1300" height="800" fillOpacity="0" />
        </g>
        <g id="rooms">
          <g id="S-21a-Denis">
            <rect
              x="2"
              y="141"
              width="209"
              height="153"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-21a-Denis")}
            />
          </g>
          <g id="S-21b-MacAlistair">
            <rect
              x="4"
              y="298"
              width="206"
              height="260"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-21b-MacAlistair")}
            />
          </g>
          <g id="S-21c-Ritchie">
            <rect
              x="214"
              y="296"
              width="188.48"
              height="262"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-21c-Ritchie")}
            />
          </g>
          <g id="S-22-Ada-Lovelace">
            <rect
              x="4"
              y="614"
              width="339"
              height="146"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-22-Ada-Lovelace")}
            />
          </g>
          <g id="S-23a-Hedy-Lamarr">
            <rect
              x="680"
              y="676"
              width="56"
              height="84"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-23a-Hedy-Lamarr")}
            />
            <rect
              x="511"
              y="614"
              width="170"
              height="146"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-23a-Hedy-Lamarr")}
            />
          </g>
          <g id="S-23b-Al-Jazari">
            <rect
              x="740"
              y="614"
              width="104"
              height="146"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-23b-Al-Jazari")}
            />
          </g>
          <g id="S-24-Roland-Moreno">
            <path
              d="M 839 174 L 839 104 L 920 174 Z"
              transform="translate(0,139)scale(1,-1)translate(0,-139)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-24-Roland-Moreno")}
            />
            <path
              d="M 797.17 445.12 L 797.17 132.2 L 881.58 445.12 Z"
              transform="translate(839.37,0)scale(-1,1)translate(-839.37,0)rotate(15,839.37,288.66)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-24-Roland-Moreno")}
            />
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M 839 88 L 903 88 L 903 106 L 839 106 L 839 88 Z"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-24-Roland-Moreno")}
            />
            <rect
              x="877.08"
              y="108.67"
              width="84.91"
              height="314"
              transform="rotate(-15,920.03,265.67)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-24-Roland-Moreno")}
            />
          </g>
          <g id="S-25b-Barzey">
            <path
              d="M 1048.58 579.9 L 1085.77 376.2 L 1235.53 376.2 L 1198.34 579.9 Z"
              transform="rotate(-30,1142.05,478.05)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-25b-Barzey")}
            />
            <path
              d="M 1043 379 L 1163 379 L 1163 439 L 1043 439 Z"
              transform="rotate(340,1103,409)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-25b-Barzey")}
            />
          </g>
          <g id="S-25a-Gwen">
            <rect
              x="977.94"
              y="212.35"
              width="101.38"
              height="180.72"
              transform="rotate(345,1028.63,302.71)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-25a-Gwen")}
            />
            <path
              d="M 998.87 376.61 L 1118.87 376.61 L 1118.87 390.61 L 998.87 390.61 L 998.87 376.61 Z"
              transform="rotate(340,1058.87,383.61)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-25a-Gwen")}
            />
            <rect
              x="1042.75"
              y="92.63"
              width="85.05"
              height="281.47"
              transform="rotate(340,1085.28,233.37)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-25a-Gwen")}
            />
          </g>
          <g
            id="room-labels"
            className="text-[16px]"
            style={{ fontFamily: "Helvetica" }}
          >
            <text x="103" y="223" textAnchor="middle" fill={Color}>
              Denis
            </text>
            <text x="97" y="436" textAnchor="middle" fill={Color}>
              MacAlistair
            </text>
            <text x="311" y="439" textAnchor="middle" fill={Color}>
              Ritchie
            </text>
            <text x="163" y="692" textAnchor="middle" fill={Color}>
              Ada Lovelace
            </text>
            <text x="618" y="697" textAnchor="middle" fill={Color}>
              Hedy Lamarr
            </text>
            <text x="790" y="698" textAnchor="middle" fill={Color}>
              Al Jazari
            </text>
            <text x="907" y="298" textAnchor="middle" fill={Color}>
              Roland Moreno
            </text>
            <text x="1143" y="476" textAnchor="middle" fill={Color}>
              Barzey
            </text>
            <text x="1063" y="278" textAnchor="middle" fill={Color}>
              Gwen
            </text>
          </g>
        </g>
        <g id="floor">
          <path
            d="M 974.76 642.61 L 1004.77 475.98 L 1103.42 475.98 L 1073.41 642.61 Z"
            fill="url(#mx-pattern-hatch-1-636263-0)"
            transform="rotate(330,1039.09,559.3)"
          />
          <rect x="4" y="562" width="142.33" height="48" fillOpacity="0" />
          <rect
            x="912.07"
            y="11"
            width="142"
            height="69.99"
            fill="url(#mx-pattern-hatch-1-636263-0)"
            transform="rotate(-8,983.07,45.99)"
          />
          <rect
            x="406"
            y="416"
            width="83.55"
            height="141.96"
            fill="url(#mx-pattern-hatch-1-636263-0)"
          />
          <g fill={Color}>
            <rect x="836" y="84" width="71" height="4.01" />
            <rect x="736" y="610" width="4.01" height="154" />
            <rect
              x="1078.22"
              y="431.47"
              width="4.01"
              height="187.51"
              transform="rotate(-20,1080.23,525.23)"
            />
            <rect
              x="955.01"
              y="216.06"
              width="77"
              height="4.01"
              transform="rotate(-15,993.51,218.07)"
            />
            <rect
              x="1011.02"
              y="110.98"
              width="4.01"
              height="102.05"
              transform="rotate(-20,1013.03,162.01)"
            />
            <rect
              x="843"
              y="603.78"
              width="56"
              height="4.01"
              transform="rotate(-21,871,605.78)"
            />
            <rect
              x="927.73"
              y="570"
              width="60.19"
              height="4.01"
              transform="rotate(-21,957.82,572.01)"
            />
            <rect
              x="959.22"
              y="84.36"
              width="4.01"
              height="333.61"
              transform="rotate(-15,961.23,251.16)"
            />
            <rect x="449" y="451" width="4.01" height="64" />
            <rect
              x="911.13"
              y="92.38"
              width="3.55"
              height="19.75"
              transform="rotate(90,912.91,102.26)"
            />
            <rect
              x="834.97"
              y="434.74"
              width="122.07"
              height="4.01"
              transform="rotate(-15,896.01,436.74)"
            />
            <rect x="836" y="35" width="4.01" height="526" />
            <rect x="680" y="610" width="4.01" height="64" />
            <rect x="680" y="672" width="60" height="4.01" />
            <rect
              x="1028"
              y="521.83"
              width="4.01"
              height="77"
              transform="rotate(-20,1030.01,560.33)"
            />
            <rect
              x="1032"
              y="374"
              width="147.21"
              height="4.01"
              transform="rotate(340,1105.61,376.01)"
            />
            <rect
              x="1143.41"
              y="-17.11"
              width="4.01"
              height="574.01"
              transform="rotate(-20,1145.41,269.89)"
            />
            <rect x="105" y="294" width="387" height="4.01" />
            <rect x="403" y="294" width="4.01" height="267" />
            <rect x="342" y="558" width="63" height="4.01" />
            <rect x="210" y="558" width="87" height="4.01" />
            <rect x="210" y="391" width="4.01" height="171" />
            <rect x="0" y="558" width="164" height="4.01" />
            <rect x="0" y="610" width="150" height="4.01" />
            <rect x="189" y="610" width="158" height="4.01" />
            <rect x="343" y="656" width="4.01" height="108" />
            <rect x="0" y="760" width="858" height="4.01" />
            <rect x="415" y="680" width="4.01" height="84" />
            <rect x="415" y="610" width="4.01" height="41" />
            <rect x="489" y="557" width="351" height="4.01" />
            <rect x="488" y="294" width="4.01" height="265" />
            <rect x="403" y="413" width="89" height="4.01" />
            <rect x="506.94" y="610" width="4.01" height="154" />
            <rect x="531" y="610" width="153" height="4.01" />
            <rect x="843" y="610" width="4.01" height="154" />
            <rect
              x="827"
              y="648"
              width="448.18"
              height="4.01"
              transform="rotate(-30,1051.09,650.01)"
            />
            <rect
              x="993"
              y="500"
              width="4.01"
              height="170.64"
              transform="rotate(-20,995,585.32)"
            />
            <rect
              x="1032"
              y="457"
              width="24.33"
              height="4.01"
              transform="rotate(-30,1044.16,459.01)"
            />
            <rect
              x="962"
              y="498"
              width="24.33"
              height="4.01"
              transform="rotate(-30,974.16,500)"
            />
            <rect x="762" y="610" width="85" height="4.01" />
            <rect x="903" y="13" width="4.01" height="34" />
            <rect x="836" y="35" width="70" height="4.01" />
            <rect
              x="916.99"
              y="82.83"
              width="160"
              height="4.01"
              transform="rotate(-5,996.99,84.84)"
            />
            <rect
              x="947"
              y="44"
              width="73.82"
              height="4.01"
              transform="rotate(-5,983.91,46.01)"
            />
            <rect
              x="903"
              y="6.04"
              width="147"
              height="4.01"
              transform="rotate(-5,976.5,8.05)"
            />
            <rect x="903" y="71" width="4.01" height="33" />
            <rect
              x="991.33"
              y="98.28"
              width="91.66"
              height="4.01"
              transform="rotate(340,1037.16,100.29)"
            />
            <rect x="0" y="137" width="4.01" height="627" />
            <rect x="0" y="137" width="214" height="4.01" />
            <rect x="210" y="137" width="4.01" height="173.23" />
            <rect x="0" y="294" width="76" height="4.01" />
          </g>
          {/* Elevator Icon */}
          <svg
            x="899.53"
            y="627.5"
            xmlns="http://www.w3.org/2000/svg"
            width="620"
            height="572"
          >
            <g fill={Color} transform="scale(0.09,0.09)">
              <circle cx="130.95011" cy="46.58577" r="46.54521" />
              <path d="M124.50539,388.15534V549.98933C124.26193,579.39154,80.494976,579.39154,80.108304,549.98933V388.15534H22.821751L84.404788,171.89962H74.379644L38.57554,295.0651C29.524278,322.30474,-7.3109962,311.27714,1.3392857,282.17574L41.43986,148.98509C46.051436,133.68965,65.32836,106.68061,98.726432,106.02037H128.80188H163.17384C195.6095,106.68061,214.96663,133.91881,220.46041,148.98509L260.56101,282.17574C268.69571,311.1339,232.15259,323.02082,223.32473,295.0651L187.52063,171.89962H176.06331L239.07855,388.15534H180.3598V549.98933C180.8181,579.39154,137.22302,579.2483,137.39487,549.98933V388.15534H124.50539z" />
              <circle cx="511.90545" cy="46.58577" r="46.54521" />
              <path d="M462.49589,106.02037C426.70613,106.02037,403.77713,137.00793,403.77713,167.60313V310.81886C403.44773,338.80318,443.74313,338.80318,443.87777,310.81886V179.06038H453.90289V542.82853C453.28133,580.80938,506.95025,579.72094,506.89297,542.82853V330.86906H515.48597V542.82853C516.18773,579.72094,570.13733,580.80938,569.90817,542.82853V179.06038H579.93333V310.81886C579.46073,339.01802,619.54701,339.01802,620.03389,310.81886V167.60313C619.46109,137.00793,595.67281,106.56889,559.88305,106.02037H462.49589z" />
              <rect
                x="297.79132"
                y="5.7684445"
                width="52.996765"
                height="562.84003"
              />
            </g>
          </svg>
          {/* Toilet Icon */}
          <svg
            x="689.5"
            y="620.07"
            height="800"
            width="800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill={Color} transform="scale(0.09,0.09)">
              <path d="M88.942,484.606h306.723V128.322H88.942V484.606z M365.665,454.606H257.303V158.322h108.361V454.606z M118.942,158.322h108.361v296.285H118.942V158.322z" />
              <polygon points="228.41,21.213 207.197,0 157.803,49.393 108.41,0 87.197,21.213 157.803,91.82" />
              <polygon points="326.803,45.82 376.197,95.213 397.41,74 326.803,3.393 256.197,74 277.41,95.213" />
            </g>
          </svg>
          {/* Coffee Icons */}
          <g fill={Color}>
            <svg
              x="437.5"
              y="660.5"
              height="44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26,28.36H6v-0.72h20V28.36z M19,26.36h-6c-2.404,0-4.36-1.956-4.36-4.36v-8c0-0.199,0.161-0.36,0.36-0.36h14c0.199,0,0.36,0.161,0.36,0.36v1.64H25c1.302,0,2.36,1.059,2.36,2.36v2c0,1.302-1.059,2.36-2.36,2.36h-1.654C23.162,24.597,21.283,26.36,19,26.36z M9.36,14.36V22c0,2.007,1.633,3.64,3.64,3.64h6c2.007,0,3.64-1.633,3.64-3.64v-7.64C22.64,14.36,9.36,14.36,9.36,14.36z M23.36,21.64H25c0.904,0,1.64-0.735,1.64-1.64v-2c0-0.904-0.735-1.64-1.64-1.64h-1.64V21.64zM20.36,12h-0.72v-1.283c0-0.525,0.124-1.051,0.358-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.234-0.469-0.358-0.995-0.358-1.52V5h0.721v0.283c0,0.414,0.098,0.829,0.282,1.198c0.476,0.952,0.476,2.087,0,3.039c-0.185,0.369-0.282,0.784-0.282,1.198L20.36,12L20.36,12z M12.36,12h-0.72v-1.283c0-0.525,0.124-1.05,0.359-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.235-0.47-0.359-0.995-0.359-1.52V5h0.72v0.283c0,0.414,0.098,0.828,0.283,1.198c0.476,0.952,0.476,2.087,0,3.039c-0.185,0.37-0.283,0.784-0.283,1.198V12z M16.36,11h-0.72V9.717c0-0.525,0.124-1.05,0.359-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.235-0.47-0.359-0.995-0.359-1.52V4h0.72v0.283c0,0.414,0.098,0.828,0.283,1.198c0.477,0.952,0.477,2.087,0,3.039c-0.185,0.37-0.283,0.784-0.283,1.198V11z"
                transform="scale(1.37,1.37)"
              />
            </svg>
            <svg
              x="356.5"
              y="660.5"
              height="44"
              width="44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26,28.36H6v-0.72h20V28.36z M19,26.36h-6c-2.404,0-4.36-1.956-4.36-4.36v-8c0-0.199,0.161-0.36,0.36-0.36h14c0.199,0,0.36,0.161,0.36,0.36v1.64H25c1.302,0,2.36,1.059,2.36,2.36v2c0,1.302-1.059,2.36-2.36,2.36h-1.654C23.162,24.597,21.283,26.36,19,26.36z M9.36,14.36V22c0,2.007,1.633,3.64,3.64,3.64h6c2.007,0,3.64-1.633,3.64-3.64v-7.64C22.64,14.36,9.36,14.36,9.36,14.36z M23.36,21.64H25c0.904,0,1.64-0.735,1.64-1.64v-2c0-0.904-0.735-1.64-1.64-1.64h-1.64V21.64zM20.36,12h-0.72v-1.283c0-0.525,0.124-1.051,0.358-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.234-0.469-0.358-0.995-0.358-1.52V5h0.721v0.283c0,0.414,0.098,0.829,0.282,1.198c0.476,0.952,0.476,2.087,0,3.039c-0.185,0.369-0.282,0.784-0.282,1.198L20.36,12L20.36,12z M12.36,12h-0.72v-1.283c0-0.525,0.124-1.05,0.359-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.235-0.47-0.359-0.995-0.359-1.52V5h0.72v0.283c0,0.414,0.098,0.828,0.283,1.198c0.476,0.952,0.476,2.087,0,3.039c-0.185,0.37-0.283,0.784-0.283,1.198V12z M16.36,11h-0.72V9.717c0-0.525,0.124-1.05,0.359-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.235-0.47-0.359-0.995-0.359-1.52V4h0.72v0.283c0,0.414,0.098,0.828,0.283,1.198c0.477,0.952,0.477,2.087,0,3.039c-0.185,0.37-0.283,0.784-0.283,1.198V11z"
                transform="scale(1.37,1.37)"
              />
            </svg>
          </g>
        </g>
      </g>
    </svg>
  );
}
