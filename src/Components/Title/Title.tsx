import './Title.scss';

function Title({text}: {text: string}) {
  return (
    <div className='border-b-[8px] border-secondary bg-background relative'>
      <h2 data-text={text} className="py-[12px] text-center text-4xl md:text-5xl text-primary drop-shadow-title">
        {text}
      </h2>
    </div>
  )
}

export { Title };