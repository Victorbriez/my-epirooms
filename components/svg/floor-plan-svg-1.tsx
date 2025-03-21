"use client";

interface FloorPlanProps {
  Color: string;
  getRoomColor: (roomKey: string) => string;
  onRoomClick?: (roomKey: string) => void;
}

export default function FloorPlanSVG1({
  Color,
  getRoomColor,
  onRoomClick,
}: FloorPlanProps) {
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
          <g
            id="S-11-Microtech"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/S-11-Microtech")
            }
            style={{ cursor: "pointer" }}
          >
            <rect
              x="2"
              y="141.48"
              width="209"
              height="152.52"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-11-Microtech")}
            />
          </g>
          <g
            id="S-12-Pandora"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/S-12-Pandora")
            }
            style={{ cursor: "pointer" }}
          >
            <rect
              x="4"
              y="614"
              width="402"
              height="146"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-12-Pandora")}
            />
          </g>
          <g
            id="S-14-Poudlard"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/S-14-Poudlard")
            }
            style={{ cursor: "pointer" }}
          >
            <path
              d="M 1064.96 374.73 L 1071.98 314.73 L 1173.04 314.73 L 1166.02 374.73 Z"
              transform="translate(0,344.73) scale(1,-1) translate(0,-344.73) rotate(15,1119,344.73)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-14-Poudlard")}
            />
            <path
              d="M 903.54 177.45 L 1171.98 177.45 L 1171.98 340.18 L 903.54 340.18 L 903.54 177.45 Z"
              transform="rotate(75,1037.76,258.82)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-14-Poudlard")}
            />
            <rect
              x="925.7"
              y="172.06"
              width="266.55"
              height="147.35"
              transform="rotate(70,1058.98,245.74)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-14-Poudlard")}
            />
          </g>
          <g
            id="O-12-Arrakis"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/O-12-Arrakis")
            }
            style={{ cursor: "pointer" }}
          >
            <rect
              x="4"
              y="376"
              width="95"
              height="182.48"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/O-12-Arrakis")}
            />
          </g>
          <g
            id="B-15-Krikkit"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/B-15-Krikkit")
            }
            style={{ cursor: "pointer" }}
          >
            <path
              d="M 1088.42 491.43 L 1107.05 383.87 L 1214.34 383.87 L 1195.71 491.43 Z"
              transform="rotate(-30,1151.38,437.65)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/B-15-Krikkit")}
            />
            <path
              d="M 1086.5 442.93 L 1086.5 374.5 L 1188.31 442.93 Z"
              transform="translate(0,408.72)scale(1,-1)translate(0,-408.72)rotate(16,1137.41,408.72)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/B-15-Krikkit")}
            />
          </g>
          <g
            id="B-14-La-Matrice"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/B-14-La-Matrice")
            }
            style={{ cursor: "pointer" }}
          >
            <path
              d="M 1081.92 576.92 L 1097.23 501.06 L 1248.44 501.06 L 1233.13 576.92 Z"
              transform="rotate(-30,1165.18,538.99)"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/B-14-La-Matrice")}
            />
          </g>
          <g id="B-11-Gallifrey">
            <rect x="410" y="614" width="165" height="146" fill="grey" />
          </g>
          <g id="B-12-Le-Continental">
            <rect x="579" y="614" width="102" height="146" fill="grey" />
          </g>
          <g id="B-13-Kaer-Morhen">
            <rect x="740" y="614.06" width="103" height="145.94" fill="grey" />
            <rect x="685" y="676.49" width="56" height="83.51" fill="grey" />
          </g>
          <g
            id="room-labels"
            className="text-[16px]"
            style={{ fontFamily: "Helvetica", cursor: "pointer" }}
          >
            <text
              x="105"
              y="225"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/S-11-Microtech")
              }
            >
              Microtech
            </text>
            <text
              x="205"
              y="690"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/S-12-Pandora")
              }
            >
              Pandora
            </text>
            <text
              x="1045"
              y="260"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/S-14-Poudlard")
              }
            >
              Poudlard
            </text>
            <text
              x="50"
              y="470"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/O-12-Arrakis")
              }
            >
              Arrakis
            </text>
            <text
              x="1145"
              y="440"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/B-15-Krikkit")
              }
            >
              Krikkit
            </text>
            <text
              x="1165"
              y="540"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/B-14-La-Matrice")
              }
            >
              La Matrice
            </text>
          </g>
          <g
            id="room-labels-pedago"
            className="text-[16px]"
            style={{ fontFamily: "Helvetica", cursor: "default" }}
          >
            <text x="765" y="700" textAnchor="middle" fill={"#1a1a1a"}>
              Kaer Morhen
            </text>
            <text x="495" y="690" textAnchor="middle" fill={"#1a1a1a"}>
              Gallifrey
            </text>
            <text x="630" y="702" textAnchor="middle" fill={"#1a1a1a"}>
              Continental
            </text>
          </g>
        </g>
        <g id="floor">
          <rect
            x="897"
            y="3"
            width="154"
            height="91"
            fill="url(#mx-pattern-hatch-1-636263-0)"
          />
          <rect
            x="214.55"
            y="415.76"
            width="131.45"
            height="106.24"
            fill="url(#mx-pattern-hatch-1-636263-0)"
          />
          <rect
            x="405.45"
            y="416.04"
            width="83.55"
            height="141.96"
            fill="url(#mx-pattern-hatch-1-636263-0)"
          />
          <g fill={Color}>
            <rect x="94.99" y="355.36" width="4.01" height="20.64" />
            <rect x="681" y="610" width="4.01" height="154" />
            <rect x="681" y="672.48" width="59" height="4.01" />
            <rect x="406.01" y="610" width="4.01" height="154" />
            <rect x="575" y="610" width="4.01" height="154" />
            <rect x="-0.01" y="760" width="859" height="4.01" />
            <rect
              x="1104.79"
              y="426.77"
              width="4.01"
              height="95.22"
              transform="rotate(-20,1106.8,474.38)"
            />
            <rect
              x="1113.99"
              y="489.52"
              width="109.91"
              height="4.01"
              transform="rotate(-30,1168.94,491.53)"
            />
            <rect
              x="957.04"
              y="146.04"
              width="4.01"
              height="270.99"
              transform="rotate(-15,959.05,281.53)"
            />
            <rect x="1" y="372.42" width="98" height="4.01" />
            <rect x="1" y="355.36" width="98" height="4.01" />
            <rect
              x="1039"
              y="521.82"
              width="4.01"
              height="77"
              transform="rotate(-20,1041.01,560.32)"
            />
            <rect x="444.73" y="461.04" width="4.01" height="64" />
            <rect
              x="990.78"
              y="383.28"
              width="193.16"
              height="4.01"
              transform="rotate(-15,1087.36,385.28)"
            />
            <rect
              x="842.46"
              y="601"
              width="56"
              height="4.01"
              transform="rotate(-21,870.46,603.01)"
            />
            <rect
              x="927.08"
              y="568.62"
              width="62.15"
              height="4.01"
              transform="rotate(-21,958.15,570.63)"
            />
            <rect
              x="931"
              y="122"
              width="41.55"
              height="4.01"
              transform="rotate(75,951.77,124.01)"
            />
            <rect
              x="953"
              y="115.44"
              width="136.72"
              height="4.01"
              transform="rotate(-21,1021.36,117.45)"
            />
            <rect
              x="1146"
              y="-14.97"
              width="4.01"
              height="572.45"
              transform="rotate(-20,1148.01,271.26)"
            />
            <rect
              x="1087.66"
              y="483.34"
              width="4.01"
              height="136.6"
              transform="rotate(-20,1089.66,551.64)"
            />
            <rect x="-0.01" y="137.48" width="4.01" height="626.52" />
            <rect x="0" y="137.48" width="215" height="4.01" />
            <rect x="211" y="137.48" width="4.01" height="160.52" />
            <rect x="0" y="293.99" width="167" height="4.01" />
            <rect x="200.01" y="293.99" width="293" height="4.01" />
            <rect x="402" y="294" width="4.01" height="269" />
            <rect x="342" y="558.99" width="78" height="4.01" />
            <rect x="211" y="522.48" width="134" height="4.01" />
            <rect x="211" y="414" width="4.01" height="149" />
            <rect x="0" y="558.48" width="99" height="4.01" />
            <rect x="0" y="610" width="80" height="4.01" />
            <rect x="115" y="610" width="160" height="4.01" />
            <rect x="478" y="557.48" width="361" height="4.01" />
            <rect x="489" y="294" width="4.01" height="265.48" />
            <rect x="402" y="413.48" width="91" height="4.01" />
            <rect x="622" y="610" width="63" height="4.01" />
            <rect x="736.45" y="609.99" width="3.55" height="65" />
            <rect x="843" y="610" width="4.01" height="154" />
            <rect
              x="827.93"
              y="648"
              width="448.18"
              height="4.01"
              transform="rotate(-30,1052.02,650.01)"
            />
            <rect x="836" y="102.48" width="4.01" height="457" />
            <rect
              x="834.97"
              y="435.22"
              width="122.07"
              height="4.01"
              transform="rotate(-15,896.01,437.23)"
            />
            <rect x="892.45" y="0" width="4.01" height="105.04" />
            <rect x="836" y="102.48" width="60" height="4.01" />
            <rect
              x="993.32"
              y="500.42"
              width="4.01"
              height="172.52"
              transform="rotate(-20,995.32,586.68)"
            />
            <rect
              x="956.57"
              y="478.2"
              width="105.48"
              height="4.01"
              transform="rotate(-30,1009.31,480.2)"
            />
            <rect x="739.45" y="610" width="83.67" height="4.01" />
            <rect x="892.45" y="0" width="159.55" height="4.01" />
            <rect x="212" y="414" width="139" height="4.01" />
            <rect x="211" y="337.77" width="4.01" height="34.94" />
            <rect x="314" y="609.99" width="95" height="4.01" />
            <rect x="342" y="522.48" width="4.01" height="38" />
            <rect x="568.03" y="610" width="17.94" height="4.01" />
            <rect x="406.01" y="610" width="132.88" height="4.01" />
            <rect x="346.99" y="414" width="4.01" height="56.58" />
            <rect x="266" y="470.42" width="85" height="4.01" />
            <rect x="950" y="47" width="67" height="4.01" />
            <rect
              x="894.45"
              y="102.06"
              width="4.01"
              height="11.33"
              transform="rotate(-40,896.45,107.72)"
            />
          </g>
          <path
            d="M 974.76 642.61 L 1004.77 475.98 L 1103.42 475.98 L 1073.41 642.61 Z"
            fill="url(#mx-pattern-hatch-1-636263-0)"
            transform="rotate(330,1039.09,559.3)"
          />
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
          {/* Toilet Icons */}
          <g fill={Color}>
            <svg
              x="7.5"
              y="303.04"
              height="800px"
              width="800px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="scale(0.09,0.09)">
                <path d="M88.942,484.606h306.723V128.322H88.942V484.606z M365.665,454.606H257.303V158.322h108.361V454.606z M118.942,158.322h108.361v296.285H118.942V158.322z" />
                <polygon points="228.41,21.213 207.197,0 157.803,49.393 108.41,0 87.197,21.213 157.803,91.82" />
                <polygon points="326.803,45.82 376.197,95.213 397.41,74 326.803,3.393 256.197,74 277.41,95.213" />
              </g>
            </svg>
            <svg
              x="689.5"
              y="620.07"
              height="800px"
              width="800px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="scale(0.09,0.09)">
                <path d="M88.942,484.606h306.723V128.322H88.942V484.606z M365.665,454.606H257.303V158.322h108.361V454.606z M118.942,158.322h108.361v296.285H118.942V158.322z" />
                <polygon points="228.41,21.213 207.197,0 157.803,49.393 108.41,0 87.197,21.213 157.803,91.82" />
                <polygon points="326.803,45.82 376.197,95.213 397.41,74 326.803,3.393 256.197,74 277.41,95.213" />
              </g>
            </svg>
          </g>
          {/* Coffee Icons */}
          <g fill={Color}>
            <svg
              x="292.5"
              y="528.13"
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
              x="873.73"
              y="259.04"
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
