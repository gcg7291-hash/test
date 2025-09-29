export default function ProductCard({ elements, elements2 }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 elements={name}>상품명</h2>
      <p>가격</p>
      <p>재고 상태</p>
      <p>평점</p>
      <div>태그들</div>
    </div>
  );
}