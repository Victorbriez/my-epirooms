"use client";

interface FloorPlanProps {
  Color: string;
  getRoomColor: (roomKey: string) => string;
  onRoomClick?: (roomKey: string) => void;
}

export default function FloorPlanSVG0({
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
        <g id="rooms" fill="none">
          <g id="B-01-Bulma">
            <rect
              x="218.46"
              y="3.49"
              width="188.54"
              height="103.51"
              fill="grey"
            />
          </g>
          <g
            id="B-02-Elliot-Alderson"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/B-02-Elliot-Alderson")
            }
            style={{ cursor: "pointer" }}
          >
            <rect
              x="6"
              y="3.48"
              width="95"
              height="153"
              fill={getRoomColor(
                "FR/LIL/Hopital-Militaire/B-02-Elliot-Alderson"
              )}
            />
          </g>
          <g
            id="S-01-Stark"
            onClick={() => onRoomClick?.("FR/LIL/Hopital-Militaire/S-01-Stark")}
            style={{ cursor: "pointer" }}
          >
            <rect
              x="219"
              y="158.48"
              width="187.48"
              height="117.52"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-01-Stark")}
            />
          </g>
          <g
            id="S-02-Pru-Ha"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/S-02-Pru-Ha")
            }
            style={{ cursor: "pointer" }}
          >
            <rect
              x="218.55"
              y="388"
              width="188.45"
              height="38"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-02-Pru-Ha")}
            />
            <rect
              x="6"
              y="425"
              width="400"
              height="197.48"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-02-Pru-Ha")}
            />
          </g>
          <g
            id="S-03-Mei-Hatsume"
            onClick={() =>
              onRoomClick?.("FR/LIL/Hopital-Militaire/S-03-Mei-Hatsume")
            }
            style={{ cursor: "pointer" }}
          >
            <rect
              x="410"
              y="421"
              width="170"
              height="201.48"
              fill={getRoomColor("FR/LIL/Hopital-Militaire/S-03-Mei-Hatsume")}
            />
          </g>
          <g
            id="room-labels"
            className="text-[16px]"
            style={{ fontFamily: "Helvetica", cursor: "pointer" }}
          >
            <text
              x="50"
              y="73"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/B-02-Elliot-Alderson")
              }
            >
              Elliot
            </text>
            <text
              x="50"
              y="97"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/B-02-Elliot-Alderson")
              }
            >
              Alderson
            </text>
            <text
              x="305"
              y="220"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/S-01-Stark")
              }
            >
              Stark
            </text>
            <text
              x="200"
              y="530"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/S-02-Pru-Ha")
              }
            >
              Pru&apos;Ha
            </text>
            <text
              x="490"
              y="530"
              textAnchor="middle"
              fill={"#1a1a1a"}
              onClick={() =>
                onRoomClick?.("FR/LIL/Hopital-Militaire/S-03-Mei-Hatsume")
              }
            >
              Mei Hatsume
            </text>
          </g>
          <g
            id="room-labels-pedago"
            className="text-[16px]"
            style={{ fontFamily: "Helvetica", cursor: "default" }}
          >
            <text x="305" y="60" textAnchor="middle" fill={"#1a1a1a"}>
              Bulma
            </text>
          </g>
        </g>
        <g id="floor">
          <path
            d="M 978.76 504.61 L 1008.77 337.98 L 1107.42 337.98 L 1077.41 504.61 Z"
            fill="url(#mx-pattern-hatch-1-636263-0)"
            transform="rotate(330,1043.09,421.3)"
          />
          <rect
            x="409.45"
            y="278.04"
            width="83.55"
            height="141.96"
            fill="url(#mx-pattern-hatch-1-636263-0)"
          />
          <rect
            x="216"
            y="279.34"
            width="190"
            height="106.24"
            fill="url(#mx-pattern-hatch-1-636263-0)"
          />

          <g fill={Color}>
            <rect
              x="1087.01"
              y="309"
              width="4.01"
              height="174.54"
              transform="rotate(-20,1089.02,396.27)"
            />
            <rect x="4" y="-0.52" width="4.01" height="625" />
            <rect x="4" y="-0.52" width="491" height="4.01" />
            <rect x="215" y="-0.52" width="4.01" height="109.52" />
            <rect x="4" y="155.19" width="100" height="4.01" />
            <rect x="203" y="156.48" width="206" height="4.01" />
            <rect x="406" y="156.48" width="4.01" height="277.52" />
            <rect x="215" y="384.99" width="192" height="4.01" />
            <rect x="214.99" y="233" width="4.01" height="102" />
            <rect x="4" y="420.99" width="116" height="4.01" />
            <rect x="4" y="622.48" width="578" height="4.01" />
            <rect x="407" y="419.48" width="175" height="4.01" />
            <rect x="493" y="157" width="4.01" height="232" />
            <rect x="407" y="275.48" width="87" height="4.01" />
            <rect x="685" y="534.48" width="56" height="4.01" />
            <rect x="740" y="475.48" width="4.01" height="147.52" />
            <rect
              x="841.07"
              y="548.25"
              width="298.06"
              height="4.01"
              transform="rotate(-30,990.1,550.26)"
            />
            <rect
              x="988.26"
              y="364.02"
              width="4.01"
              height="119.52"
              transform="rotate(-20,990.27,423.78)"
            />
            <rect
              x="833.01"
              y="373.84"
              width="244.05"
              height="4.01"
              transform="rotate(-30,955.03,375.85)"
            />
            <rect x="217.4" y="275.42" width="190.6" height="4.01" />
            <rect x="215" y="158.48" width="4.01" height="37.52" />
            <rect x="685" y="420" width="4.01" height="205" />
            <rect x="578.45" y="419.48" width="4.01" height="204.48" />
            <rect x="214.99" y="333.97" width="135.94" height="4.01" />
            <rect x="215" y="385" width="4.01" height="38" />
            <rect x="406" y="492" width="4.01" height="132" />
            <rect x="101" y="-0.52" width="4.01" height="123.52" />
            <rect x="406" y="-0.52" width="4.01" height="109.52" />
            <rect x="491.54" y="-0.52" width="4.01" height="109.52" />
            <rect x="215" y="106.48" width="76" height="4.01" />
            <rect x="325" y="106.48" width="85" height="4.01" />
            <rect x="155.01" y="421" width="64" height="4.01" />
            <rect x="451.46" y="157" width="45.55" height="4.01" />
            <rect x="450" y="107" width="45.55" height="4.01" />
            <rect x="685" y="622.48" width="177" height="4.01" />
            <rect
              x="897"
              y="496"
              width="168.51"
              height="4"
              transform="rotate(-30,981.26,498)"
            />
            <rect
              x="807.57"
              y="477.97"
              width="136.53"
              height="4.01"
              transform="rotate(-120,875.84,479.98)"
            />
            <rect x="685" y="419.48" width="122" height="4.01" />
            <rect x="450" y="318.48" width="4.01" height="69.52" />
            <rect x="450" y="386.44" width="47" height="4.01" />
            <rect
              x="1038"
              y="386.44"
              width="4.01"
              height="72.52"
              transform="rotate(-20,1040.01,422.7)"
            />
          </g>

          {/* Toilet Icons */}
          <svg
            x="7.5"
            y="165.04"
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
          <svg
            x="688.5"
            y="483.38"
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

          {/* Elevator Icons */}
          <svg
            x="437"
            y="190.25"
            height="572"
            width="264"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill={Color}>
              <circle
                cx="130.95011"
                cy="46.58577"
                r="46.54521"
                transform="scale(0.07, 0.07)"
              />
              <path
                d="M 81.781 106.021 C 45.991 106.021 23.062 137.008 23.062 167.603 L 23.062 310.819 C 22.733 338.803 63.028 338.803 63.163 310.819 L 63.163 179.061 L 73.188 179.061 L 73.188 542.829 C 72.566 580.81 126.235 579.721 126.178 542.829 L 126.178 330.869 L 134.771 330.869 L 134.771 542.829 C 135.473 579.721 189.422 580.81 189.193 542.829 L 189.193 179.061 L 199.218 179.061 L 199.218 310.819 C 198.746 339.018 238.832 339.018 239.319 310.819 L 239.319 167.603 C 238.746 137.008 214.958 106.569 179.168 106.021 L 81.781 106.021 Z"
                transform="scale(0.07, 0.07)"
              />
            </g>
          </svg>
          <svg
            x="435.5"
            y="27.5"
            height="572"
            width="264"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill={Color} transform="scale(0.07,0.07)">
              <circle cx="130.95011" cy="46.58577" r="46.54521" />
              <path d="M124.50539,388.15534V549.98933C124.26193,579.39154,80.494976,579.39154,80.108304,549.98933V388.15534H22.821751L84.404788,171.89962H74.379644L38.57554,295.0651C29.524278,322.30474,-7.3109962,311.27714,1.3392857,282.17574L41.43986,148.98509C46.051436,133.68965,65.32836,106.68061,98.726432,106.02037H128.80188H163.17384C195.6095,106.68061,214.96663,133.91881,220.46041,148.98509L260.56101,282.17574C268.69571,311.1339,232.15259,323.02082,223.32473,295.0651L187.52063,171.89962H176.06331L239.07855,388.15534H180.3598V549.98933C180.8181,579.39154,137.22302,579.2483,137.39487,549.98933V388.15534H124.50539z" />
            </g>
          </svg>

          {/* Coffee Icon */}
          <svg
            x="24.5"
            y="223.5"
            height="44"
            width="44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26,28.36H6v-0.72h20V28.36z M19,26.36h-6c-2.404,0-4.36-1.956-4.36-4.36v-8c0-0.199,0.161-0.36,0.36-0.36h14c0.199,0,0.36,0.161,0.36,0.36v1.64H25c1.302,0,2.36,1.059,2.36,2.36v2c0,1.302-1.059,2.36-2.36,2.36h-1.654C23.162,24.597,21.283,26.36,19,26.36z M9.36,14.36V22c0,2.007,1.633,3.64,3.64,3.64h6c2.007,0,3.64-1.633,3.64-3.64v-7.64C22.64,14.36,9.36,14.36,9.36,14.36z M23.36,21.64H25c0.904,0,1.64-0.735,1.64-1.64v-2c0-0.904-0.735-1.64-1.64-1.64h-1.64V21.64zM20.36,12h-0.72v-1.283c0-0.525,0.124-1.051,0.358-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.234-0.469-0.358-0.995-0.358-1.52V5h0.721v0.283c0,0.414,0.098,0.829,0.282,1.198c0.476,0.952,0.476,2.087,0,3.039c-0.185,0.369-0.282,0.784-0.282,1.198L20.36,12L20.36,12z M12.36,12h-0.72v-1.283c0-0.525,0.124-1.05,0.359-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.235-0.47-0.359-0.995-0.359-1.52V5h0.72v0.283c0,0.414,0.098,0.828,0.283,1.198c0.476,0.952,0.476,2.087,0,3.039c-0.185,0.37-0.283,0.784-0.283,1.198V12z M16.36,11h-0.72V9.717c0-0.525,0.124-1.05,0.359-1.52c0.375-0.75,0.375-1.645,0-2.395c-0.235-0.47-0.359-0.995-0.359-1.52V4h0.72v0.283c0,0.414,0.098,0.828,0.283,1.198c0.477,0.952,0.477,2.087,0,3.039c-0.185,0.37-0.283,0.784-0.283,1.198V11z"
              fill={Color}
              transform="scale(1.37,1.37)"
            />
          </svg>
        </g>
      </g>
    </svg>
  );
}
