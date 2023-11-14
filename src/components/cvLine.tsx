interface LineI {
  title: string;
  description: string;
}

export default function CvLine({ title, description }: LineI) {
  return (
    <div className='flex flex-col gap-1'>
      <h3 className='text-[#ef233c] text-xl font-medium'> {title} </h3>
      
      <p className=''> {description} </p>
    </div>
  );
}