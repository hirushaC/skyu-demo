function Circle({ className, width, height, fill = true, ...props }) {
  return (
    <div
      className={`absolute ${className} ${
        fill ? "bg-[#121445]" : "bg-[#dbf7ff]"
      } rounded-full`}
      style={{ width: `${width}px`, height: `${height}px` }}
      {...props}
    ></div>
  );
}

export default Circle;
