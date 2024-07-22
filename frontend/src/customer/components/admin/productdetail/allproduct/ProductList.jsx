const ProductList = ({ products }) => {
    const shortenText = (text, n) => {
        if (text.length > n) {
            const shortenedText = text.substring(0, n).concat("...");
            return shortenedText; // Return shortened text, not the function itself
        }
        return text;
    };

    return (
        <div>
            <div>
                <div>
                    <span>Items</span> 
                </div>
                {products.length === 0 ? (
                    <p>No product</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => {
                                const { _id, name,price,quantity, image} = product;
                                return (
                                    <tr key={_id}>
                                        <td>{index + 1}</td>
                                        <td>{shortenText(name, 16)}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>

                                      
                                        {/* Render the price and quantity columns here */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default ProductList;
