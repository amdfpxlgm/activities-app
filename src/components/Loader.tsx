// Loader component

interface LoaderProps {
  show: boolean;
}

export const Loader = (props: LoaderProps) => props.show && <p className="mt-5 text-lg">Loading...</p>;
