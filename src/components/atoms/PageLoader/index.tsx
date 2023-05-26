import BeatLoader from "react-spinners/BeatLoader";

interface IPageLoader {
  size: number;
}

const PageLoader = ({ size }: IPageLoader): JSX.Element => (
  <BeatLoader size={size} color={"#666"} loading />
);

export default PageLoader;
