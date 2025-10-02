
// product : 개별 상품 정보를 저장하고 있는 객체 데이터
export default function Product({product}) {
  return (
    <div>
      <p>{product["title"]}</p>
      <p>{product["description"]}</p>
      <hr/>
    </div>
  )
}
