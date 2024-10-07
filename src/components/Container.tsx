interface Props {
  children: React.ReactNode,
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto`}>
      {children}
    </div>
  )
}

export default Container;