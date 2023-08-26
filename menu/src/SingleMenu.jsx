/* eslint-disable react/prop-types */
export default function SingleMenu({ title, price, img, desc }) {
  return (
    <article className="flex flex-col w-80 h-96 mt-5 bg-white rounded">
      <img src={img} alt={title} className="w-full h-[200px] rounded-t" />
      <div className="p-2">
        <div className="w-full flex justify-between ">
          <h2 className="capitalize mt-1">{title}</h2>
          <h4 className="bg-orange-500 m-1 rounded">${price}</h4>
        </div>
        <hr />
        <p>{desc}</p>
      </div>
    </article>
  );
}
