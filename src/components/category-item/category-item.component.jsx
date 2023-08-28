import './category-item.styles.scss';

const CategoryItem = ({ title, imageUrl, id }) => {
  return (
    <div key={id} className="category-container">
      {/* <img /> */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
