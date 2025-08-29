export default function ProductPage({ params }: { params: { id: string } }) {
  return <h1>Mostrando producto {params.id}</h1>;
}
