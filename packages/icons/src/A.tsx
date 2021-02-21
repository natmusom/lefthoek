/** @jsx jsx */
import { jsx } from "theme-ui";
import { FunctionComponent } from "react";

export const A: FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 512 512">
      <path
        className="lobsterLight"
        d="M108.8493,366.42l3.8955-.1025c12.5264-.3282,20.3467-2.2852,24.6084-6.1583l.1065-.0937c4.3291-3.6631,7.57-8.97,16.4394-32.3574L224.2839,142.545c6.71-17.8926,18.331-26.9727,34.5342-26.9727,16.2539,0,26.7265,8.085,32.958,25.4424l72.3691,195.1192c6.1289,16.0888,9.0313,21.1972,14.7012,25.8252,2.4443,1.7851,9.5508,3.9824,21.664,4.3593l3.876.1211V401.213l-4.1-.1026c-15.543-.3887-42.832-.7988-53.0889-.7988-9.2939,0-52.6035.3975-70.2929.7988l-4.0908.0928V366.48l3.8339-.1592c11.03-.458,21.127-1.7988,25.1241-3.336l.1513-.0586.1553-.0458c5.2608-1.5469,5.5274-3.3487,5.5274-6.16,0-3.8945-1.2959-11.9414-4.9493-21.8047l-9.4-24.584H207.5856l-8.6162,22.6182c-3.6513,9.331-5.7373,17.8369-5.7373,23.3721,0,3.3964.8672,4.8759,3.4356,5.8642l.115.041c3.83,1.5957,16.68,3.669,28.9942,4.0918l3.8623.1328V401.213l-4.1-.1026c-16.0782-.4013-55.7354-.7988-64.2881-.7988-7.8184,0-32.6367.3867-48.2832.7988l-4.1055.1074Zm170.0244-98.4815c-3.8291-11.289-10.5586-29.873-17.0976-47.9326-4.792-13.2324-9.1836-25.36-12.1953-33.9463-4.462,12.6739-11.7676,32.8506-18.4454,51.2959-4.2177,11.6495-8.2509,22.7862-11.04,30.583Z"
      />
      <path
        className="midnight"
        d="M258.8178,119.5726c14.7959,0,23.595,7.1977,29.1934,22.7942L360.395,337.5242c6.3989,16.7974,9.5976,22.396,15.9966,27.594,3.2006,2.4,11.197,4.8,23.9951,5.1983v26.7954c-15.9966-.4-43.1905-.8008-53.1883-.8008-9.5976,0-52.788.4-70.3842.8008V370.3165c9.5976-.3985,21.195-1.5994,26.393-3.5989,6.8-2,8.3987-5.1982,8.3987-9.9981,0-3.999-1.199-12.3957-5.198-23.1943L296.01,306.3314H204.8288l-9.5976,25.1941c-3.5989,9.1975-5.9988,18.3967-5.9988,24.7959,0,3.5988.8006,7.5979,5.9988,9.5976,4.8,2,18.7969,3.999,30.3942,4.3975v26.7954c-15.9968-.4-55.5883-.8008-64.3873-.8008-7.9984,0-33.1925.4-48.3887.8008V370.3165c15.1962-.3985,22.7942-3.1985,27.1938-7.1978,5.2-4.3994,8.7989-10.7966,17.596-33.9931l70.3842-185.1595c5.9988-15.9968,15.9966-24.3935,30.7944-24.3935M214.4265,271.9381h69.9858c-6.3992-19.9939-31.9936-88.38-34.7917-98.3785-3.2007,10.3982-27.9944,77.9842-35.1941,98.3785m44.3913-160.3655c-9.1592,0-17.136,2.6789-23.709,7.9626-6.1438,4.9387-11.0478,12.2134-14.576,21.6218L150.1613,326.283c-8.451,22.284-11.6621,27.6629-15.2852,30.7283l-.1087.0918-.1053.0959c-3.4147,3.1038-10.824,4.8267-22.0224,5.12l-7.79.2043v42.802l8.2107-.2163c15.3131-.4036,40.5315-.7981,48.178-.7981,8.55,0,48.1552.397,64.1871.7983l8.2.2054V362.5867l-7.7253-.2656c-12.31-.4228-24.5641-2.5254-27.5925-3.7869l-.1015-.0422-.1025-.04a2.88,2.88,0,0,1-.6808-.345,5.3817,5.3817,0,0,1-.19-1.7861c0-4.9815,2.0368-13.1614,5.4487-21.8809l.0132-.0335.0128-.0336,7.6349-20.042h80.1616l8.4168,22.0112c3.6982,9.9993,4.6855,17.5117,4.6855,20.3769a6.52,6.52,0,0,1-.09,1.2515,8.89,8.89,0,0,1-2.5657,1.0715l-.3117.0918-.3035.1167c-3.5725,1.3743-13.3808,2.6377-23.8525,3.0723l-7.6682.3184V405.296l8.1818-.1863c17.6448-.4014,60.9092-.7986,70.2024-.7986,10.2517,0,37.4886.41,52.9881.7983l8.2.2054V362.5616l-7.751-.2412c-12.1782-.3792-18.0852-2.6807-19.3616-3.5437-4.6047-3.7847-7.2356-7.9141-13.3908-24.0679L295.5258,139.6229c-6.7876-18.8748-18.7954-28.05-36.708-28.05ZM225.7807,263.9381c2.5781-7.1663,5.794-16.0477,9.1255-25.2493,5.0281-13.887,10.4109-28.7537,14.6753-40.6821,2.4827,6.9274,5.3787,14.9248,8.437,23.3708,5.5935,15.4475,11.3254,31.2771,15.25,42.5606Z"
      />
      <path
        className="lobster"
        d="M189.2324,356.3211c0-6.3989,2.4-15.5983,5.9988-24.7954l9.5976-25.1943h44.5906V271.9381h-34.993c7.0669-20.0183,31.0826-85.4972,34.993-97.7393V120.9027c-9.7516,2.93-16.7694,10.7256-21.396,23.0633l-70.3842,185.16c-8.7969,23.1962-12.3959,29.5935-17.5961,33.9928-4.3994,3.9994-11.9975,6.7995-27.1936,7.1978v26.7954c15.1961-.4,40.39-.8007,48.3885-.8007,8.7992,0,48.3906.4,64.3874.8007V370.3164c-11.5973-.3983-25.5945-2.398-30.3942-4.3974C190.0331,363.9193,189.2324,359.92,189.2324,356.3211Z"
      />
    </svg>
  );
};