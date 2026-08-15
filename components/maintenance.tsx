export default function Maintenance() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6 text-center text-foreground'>
      <span className='text-sm font-medium uppercase tracking-widest text-muted-foreground'>
        Jhon Orozco
      </span>
      <h1 className='text-3xl font-bold sm:text-4xl'>Sitio en mantenimiento</h1>
      <p className='max-w-md text-muted-foreground'>
        Estamos realizando mejoras. Vuelve a visitarnos en un momento.
      </p>
      <a
        href='mailto:jhondao.desarrollo@hotmail.com'
        className='mt-2 text-sm font-medium underline underline-offset-4 hover:text-primary'
      >
        jhondao.desarrollo@hotmail.com
      </a>
    </main>
  );
}
