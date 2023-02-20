const Legend = ({ color, label }: { color: string; label: string }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: color,
          borderRadius: 5,
          marginRight: 5,
        }}
      ></div>
      <div
        style={{
          fontSize: 12,
          color: "#9B9DA3",
        }}
      >
        {label}
      </div>
    </div>
  );
};

export default Legend;
