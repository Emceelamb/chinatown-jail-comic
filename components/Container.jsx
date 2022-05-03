
export const Container = ({children}) => {
  return (
    <div className="w-full relative bg-[#F2F2F2] h-screen flex items-center flex-col justify-center space-y-10">
      {children}
    </div>
  );
};
