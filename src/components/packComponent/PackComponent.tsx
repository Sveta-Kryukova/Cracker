type PackComponentProps = {
  onSelectPack: (packSize: string) => void;
  selectedPackSize: string;
};

export const PackComponent: React.FC<PackComponentProps> = ({
  onSelectPack,
  selectedPackSize
}) => {
  return (
    <div className="pack">
      <p
        className={`pack__small ${selectedPackSize === "small" ? "selected" : ""}`}
        onClick={() => onSelectPack("small")}
      >
        small pack
      </p>
      <p
        className={`pack__medium ${selectedPackSize === "medium" ? "selected" : ""}`}
        onClick={() => onSelectPack("medium")}
      >
        medium pack
      </p>
      <p
        className={`pack__large ${selectedPackSize === "large" ? "selected" : ""}`}
        onClick={() => onSelectPack("large")}
      >
        large pack
      </p>
    </div>
  );
};
