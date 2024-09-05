import { IconProps } from "@/types/common";

const IconGinger: React.FC<IconProps> = ({
  className = "",
  fill = "primary",
}: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M45.7276 57.585C48.1719 57.4664 50.939 56.5703 54.0355 54.4687L56.9475 57.3807C52.6256 60.1478 49.0547 60.2203 45.7276 57.585ZM35.1073 39.1178C36.761 39.243 38.4278 39.803 39.8509 40.6727C35.6673 43.2751 32.1953 43.3212 28.9539 40.811C31.2202 39.2298 33.48 38.9861 35.1073 39.1178ZM37.3078 35.0924C32.3732 34.8222 30.2715 33.2806 29.9092 27.6937C35.496 28.056 37.0377 30.1577 37.3078 35.0924ZM43.033 26.7318C45.5432 29.9732 45.497 33.4453 42.8947 37.6223C41.129 34.7234 40.4307 30.4739 43.033 26.7318ZM48.3498 43.4793L45.4312 40.5607C47.5328 37.4642 48.442 34.6971 48.554 32.2528C51.1893 35.5799 51.1168 39.1574 48.3498 43.4793ZM53.9762 49.1058L51.0576 46.1871C53.1592 43.0906 54.0618 40.3235 54.1804 37.8792C56.8157 41.2063 56.7498 44.7838 53.9762 49.1058ZM42.7893 43.2224L45.7013 46.1344C41.3794 48.9015 37.8085 48.974 34.488 46.3452C36.9323 46.2267 39.6994 45.3306 42.7958 43.229L42.7893 43.2224ZM40.1012 51.9651C42.5455 51.8465 45.3126 50.9505 48.4091 48.8488L51.3211 51.7609C46.9992 54.528 43.4283 54.6004 40.1012 51.9651ZM59.596 54.7322L56.6774 51.8136C58.779 48.717 59.6882 45.9499 59.8002 43.5057C62.4355 46.8328 62.363 50.4103 59.596 54.7322ZM70.5589 65.6952L62.3037 57.44C68.0092 49.0465 64.9127 43.0379 61.1574 39.4209C60.5974 38.8807 59.787 38.7621 59.115 39.052C58.3244 36.9503 56.9804 35.1912 55.531 33.8011C54.971 33.2608 54.1606 33.1422 53.4886 33.4321C52.698 31.3304 51.354 29.5713 49.9046 28.1746C49.3446 27.6344 48.5342 27.5158 47.8622 27.8057C47.0716 25.704 45.7276 23.9515 44.2782 22.5548C43.5403 21.8432 42.3742 21.8564 41.6495 22.5811C40.1737 24.0569 39.1394 25.6776 38.4739 27.3642C36.537 25.1703 33.2956 23.912 27.9722 23.912C26.9379 23.912 26.0946 24.7487 26.0946 25.7896C26.0946 31.1064 27.3529 34.3479 29.5468 36.2849C27.9722 36.9042 26.3449 37.8858 24.7703 39.4604C24.0456 40.1852 24.039 41.3513 24.744 42.0892C26.1407 43.5386 27.8932 44.8826 29.9948 45.6732C29.7049 46.3452 29.8301 47.1556 30.3704 47.7156C31.7671 49.1651 33.5196 50.5091 35.6278 51.2931C35.3379 51.9651 35.4565 52.7755 35.9967 53.3355C37.3935 54.7849 39.1459 56.1289 41.2476 56.9195C40.9577 57.5915 41.0763 58.4019 41.6165 58.9619C43.8039 61.2283 46.8542 63.2575 50.7808 63.2575C53.3569 63.2575 56.3084 62.3747 59.6421 60.1149L67.8906 68.3635C68.253 68.7324 68.7339 68.9103 69.2148 68.9103C69.6958 68.9103 70.1767 68.7258 70.5391 68.3635C71.2704 67.6322 71.2704 66.4463 70.5391 65.715L70.5589 65.6952Z"
        fill={`var(--${fill})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.308 9.43736C13.5767 8.70606 12.3909 8.70606 11.6596 9.43736C10.9283 10.1687 10.9283 11.3546 11.6596 12.0859L21.0347 21.4611C21.4036 21.83 21.878 22.0079 22.3589 22.0079C22.8399 22.0079 23.3208 21.8234 23.6832 21.4611C24.4145 20.7298 24.4145 19.5439 23.6832 18.8126L14.308 9.43736Z"
        fill={`var(--${fill})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.1585 21.4677C34.5208 21.8366 35.0018 22.0145 35.4827 22.0145C35.9636 22.0145 36.4446 21.83 36.8069 21.4677C37.5382 20.7364 37.5382 19.5505 36.8069 18.8192L27.4318 9.44396C26.7005 8.71265 25.5146 8.71265 24.7833 9.44396C24.052 10.1753 24.052 11.3612 24.7833 12.0925L34.1585 21.4677Z"
        fill={`var(--${fill})`}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.308 22.5679C13.5767 21.8366 12.3909 21.8366 11.6596 22.5679C10.9283 23.2992 10.9283 24.4851 11.6596 25.2164L21.0347 34.5916C21.4036 34.9606 21.878 35.1385 22.3589 35.1385C22.8399 35.1385 23.3208 34.954 23.6832 34.5916C24.4145 33.8603 24.4145 32.6744 23.6832 31.9431L14.308 22.5679Z"
        fill={`var(--${fill})`}
      />
    </svg>
  );
};

export default IconGinger;
