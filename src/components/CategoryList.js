import CategoryItem from "./CategoryItem";
import '../index.css'

export default function CategoryList({catalog = []}) {
    return(
        <div className="list">
            {catalog.map(el => (
                <CategoryItem key={el.idCategory} {...el}/>
            ))}
        </div>
    )
}