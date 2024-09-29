import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Nếu bạn sử dụng icons (tùy chọn)

const productList = [
    {
        id: 1,
        name: 'Donut Strawberry',
        price: 2.99,
        rating: 4.5,
        discription: 'Occeacat est deserunt tempor offici',
        images: {
            main: require('../DATA/Container 7.png'),
            thumbnails: [
                require('../DATA/Container 7.png'),
            ]
        }
    },
    {
        id: 2,
        name: 'Donut Peach',
        price: 3.49,
        rating: 4.2,
        discription: 'Occeacat est deserunt tempor offici',
        images: {
            main: require('../DATA/Container 7 (1).png'),
            thumbnails: [
                require('../DATA/Container 7 (1).png'),
            ]
        }
    },
    {
        id: 3,
        name: 'Donut Cherry',
        price: 3.99,
        rating: 4.8,
        discription: 'Occeacat est deserunt tempor offici',
        images: {
            main: require('../DATA/Container 7 (2).png'),
            thumbnails: [
                require('../DATA/Container 7 (2).png'),
            ]
        }
    },
    {
        id: 4,
        name: 'Donut Nho',
        price: 5.00,
        rating: 4.2,
        discription: 'Occeacat est deserunt tempor offici',
        images: {
            main: require('../DATA/Container 7 (3).png'),
            thumbnails: [
                require('../DATA/Container 7 (4).png'),
            ]
        }
    }
];

const ProductScreen = () => {
    const [selectedProduct, setSelectedProduct] = useState(productList[0]); // Chọn sản phẩm đầu tiên mặc định
    const [selectedImage, setSelectedImage] = useState(selectedProduct.images.main);
    const [selectedSize, setSelectedSize] = useState('M'); // Mặc định chọn Size M
    const [quantity, setQuantity] = useState(1); // Mặc định số lượng là 1

    const handleSelectThumbnail = (thumbnailIndex) => {
        const newProduct = productList[thumbnailIndex];
        if (newProduct) {
            setSelectedProduct(newProduct); // Cập nhật sản phẩm khi chọn thumbnail
            setSelectedImage(newProduct.images.main); // Cập nhật hình ảnh chính khi chọn thumbnail
        }
    };


    // Hàm tăng giảm số lượng sản phẩm
    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(prev => prev - 1); // Không cho giảm quá 1
    };

    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
       
        <View style={styles.container}>
            <ScrollView>
            <TouchableOpacity style={styles.backButton } onPress={()=> navigation.navigate('Screen01')} >
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            {/* Hiển thị tên sản phẩm */}
            <Text style={styles.productName}>{selectedProduct.name}</Text>

            {/* Hiển thị hình lớn */}
            <Image source={selectedImage} style={styles.mainImage} />

            {/* Danh sách hình nhỏ */}
            <FlatList
                horizontal
                data={productList} // Sử dụng productList để lấy các sản phẩm
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => handleSelectThumbnail(index)} style={styles.thumbnailContainer}>
                        <Image source={item.images.thumbnails[0]} style={styles.thumbnailImage} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                style={styles.thumbnailList}
            />


            {/* Hiển thị giá và đánh giá sao */}
            <View style={styles.containerPrice}>
                <Text style={styles.price}>${selectedProduct.price} </Text>
                <Text style={styles.copoun}>Buy 1 get 1</Text>
            </View>
            <View style={styles.productTitleContainer}>
                <View style={styles.productTitle}>
                <Text style={styles.title}>{selectedProduct.name }</Text>
                <Text style={styles.discription}>{selectedProduct.discription}</Text>
                </View>
                <View style={styles.containerImage}>
                    <Image source={require('../DATA/Rating 3.png')}
                        style={styles.imgrating} />
                    <Text style={styles.imagerating}>{selectedProduct.rating}</Text>
                   
                </View>   
            
            </View>
          
            

            {/* UI chức năng Size */}
            <View style={styles.sizeContainer}>
                <Text style={styles.sizeLabel}>Size</Text>
                <View style={styles.sizeOptions}>
                    {sizes.map(size => (
                        <TouchableOpacity
                            key={size}
                            onPress={() => setSelectedSize(size)}
                            style={[
                                styles.sizeButton,
                                selectedSize === size && styles.selectedSizeButton
                            ]}
                        >
                            <Text style={[
                                styles.sizeText,
                                selectedSize === size && styles.selectedSizeText
                            ]}>
                                {size}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Xử lý các nút Quantity */}
            <View style={styles.quantityContainer}> 
                <Text style={styles.quantityLabel}>Quantity</Text>
                <View style={styles.quantityControls}>
                    <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                    <Text style={styles.total}>Total: <Text style={styles.totalprice}>
                        ${(quantity * selectedProduct.price)}
                    </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.sizeguide}>
                <Text style={styles.sizetextguide}>
                    Size guide
                </Text>
                <TouchableOpacity style={styles.backButton2} onPress={() => navigation.navigate('Screen03')}>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>


            </View>
            <View style={styles.sizeguide}>
                <Text style={styles.sizetextguide}>
                    Review (99)
                </Text>
                <TouchableOpacity style={styles.backButton2} onPress={() => navigation.navigate('Screen03')}>
                    <Ionicons name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>


            </View>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: '#3498db'}]}

            >
                <Text style={styles.buttonText}>Add to cart</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1
    },
    productName: {
        position: 'relative',
        marginLeft: 30,
        fontSize: 18,
        fontWeight: 'bold',
     
       
    },
    mainImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10
    },
    thumbnailContainer: {
        marginRight: 30,
        flexDirection: 'row',
        
    },
    thumbnailImage: {
        width: 60,
        height: 50,
        resizeMode: 'contain'
    },
    imgrating: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    thumbnailList: {
        flexDirection: 'row',
       
        
    },
    price: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#00BCD4',
    },
    rating: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10
    },
    sizeContainer: {
        marginVertical: 20
    },
    sizeLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    sizeOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10
    },
    sizeButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    selectedSizeButton: {
        backgroundColor: '#00BCD4',
        borderColor: '#00BCD4'
    },
    sizeText: {
        fontSize: 14
    },
    selectedSizeText: {
        color: '#fff'
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    quantityLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10
    },
    quantityControls: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantityButton: {
        padding: 10,
        backgroundColor: '#ddd',
        borderRadius: 5,
        marginHorizontal: 10
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    quantity: {
        fontSize: 18
    },
    backButton: {
        position: 'absolute', // Định vị nút quay lại ở vị trí tuyệt đối
       
        left: 0, // Khoảng cách từ cạnh trái màn hình
        zIndex: 1, // Đảm bảo rằng nút luôn ở trên cùng các phần tử khác
    },
    copoun: {
        color: 'red',
        backgroundColor: '#ebf4fa',
        width: 80,
        padding: 5,
        borderRadius: 5,
        marginTop: 10,

    },
    containerPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
       
       
    }, imagerating: {
        width: 20,
        height: 20,
        
    }, title: {
        fontSize: 20,
        fontWeight: 700,


    }, discription: {
        opacity: 0.7
    },
    containerImage: {
        flexDirection: 'row',
        marginTop: 15,
       marginLeft: 80,
        
    },
    productTitleContainer: {
        flexDirection: 'row',

    }, total: {
        fontSize: 15,
        marginLeft: 50,

    }, totalprice: {
        fontWeight: 'bold',
        fontSize: 20,
    }, sizeguide: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton2: {
        position: 'absolute', // Định vị nút quay lại ở vị trí tuyệt đối
       right: 5, // Khoảng cách từ cạnh trái màn hình
        zIndex: 1, // Đảm bảo rằng nút luôn ở trên cùng các phần tử khác
    }, sizetextguide: {
        fontSize: 15,
        fontWeight: 'bold',

    }, button: {
        width: 350,
        height: 50,
        backgroundColor: '#00BCD4',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 10,
    }, buttonText: {
        justifyContent: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
});

export default ProductScreen;
