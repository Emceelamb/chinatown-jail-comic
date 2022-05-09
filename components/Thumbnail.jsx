const Thumbnail = (props) => {
    return (
        <div className="flex flex-col h-screen justify-end mb-12 w-24 pl-6 items-center fixed z-20 "
          > 
              {props.children}
        </div>
    )
}
export { Thumbnail };