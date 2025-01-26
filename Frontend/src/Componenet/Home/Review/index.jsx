import React from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewsSection = () => {
  const reviews = [
    { name: 'Aarav Mehta', review: 'Great products and excellent service!', rating: 5 },
    { name: 'Priya Sharma', review: 'The discounts are amazing. Loved it!', rating: 4 },
    { name: 'Rohan Verma', review: 'Fast delivery and trustworthy service.', rating: 5 },
    { name: 'Isha Gupta', review: 'Easy returns and helpful support.', rating: 4 },
  ];

  return (
    <div className=" py-12 text-white text-center">
      <h2 className="text-4xl font-bold text-[#141414] mb-10">Customer Reviews</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="review-card bg-white p-6 rounded-lg shadow-lg w-[250px] hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h4 className="text-[#6E01B1] text-2xl font-semibold mb-3">{review.name}</h4>
            <p className="text-gray-800 mb-4 italic">"{review.review}"</p>
            <div className="flex justify-center">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-[#FFD700] text-xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;



// /****** Object:  Database [ritik258097_]    Script Date: 1/11/2025 6:01:52 PM ******/
// CREATE DATABASE [ritik258097_]
//  CONTAINMENT = NONE
//  ON  PRIMARY 
// ( NAME = N'Ecommerce_Project', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\Ecommerce_Project.mdf' , SIZE = 73728KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
//  LOG ON 
// ( NAME = N'Ecommerce_Project_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\Ecommerce_Project_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
//  WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
// GO
// ALTER DATABASE [ritik258097_] SET COMPATIBILITY_LEVEL = 160
// GO
// IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
// begin
// EXEC [ritik258097_].[dbo].[sp_fulltext_database] @action = 'enable'
// end
// GO
// ALTER DATABASE [ritik258097_] SET ANSI_NULL_DEFAULT OFF 
// GO
// ALTER DATABASE [ritik258097_] SET ANSI_NULLS OFF 
// GO
// ALTER DATABASE [ritik258097_] SET ANSI_PADDING OFF 
// GO
// ALTER DATABASE [ritik258097_] SET ANSI_WARNINGS OFF 
// GO
// ALTER DATABASE [ritik258097_] SET ARITHABORT OFF 
// GO
// ALTER DATABASE [ritik258097_] SET AUTO_CLOSE OFF 
// GO
// ALTER DATABASE [ritik258097_] SET AUTO_SHRINK OFF 
// GO
// ALTER DATABASE [ritik258097_] SET AUTO_UPDATE_STATISTICS ON 
// GO
// ALTER DATABASE [ritik258097_] SET CURSOR_CLOSE_ON_COMMIT OFF 
// GO
// ALTER DATABASE [ritik258097_] SET CURSOR_DEFAULT  GLOBAL 
// GO
// ALTER DATABASE [ritik258097_] SET CONCAT_NULL_YIELDS_NULL OFF 
// GO
// ALTER DATABASE [ritik258097_] SET NUMERIC_ROUNDABORT OFF 
// GO
// ALTER DATABASE [ritik258097_] SET QUOTED_IDENTIFIER OFF 
// GO
// ALTER DATABASE [ritik258097_] SET RECURSIVE_TRIGGERS OFF 
// GO
// ALTER DATABASE [ritik258097_] SET  ENABLE_BROKER 
// GO
// ALTER DATABASE [ritik258097_] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
// GO
// ALTER DATABASE [ritik258097_] SET DATE_CORRELATION_OPTIMIZATION OFF 
// GO
// ALTER DATABASE [ritik258097_] SET TRUSTWORTHY OFF 
// GO
// ALTER DATABASE [ritik258097_] SET ALLOW_SNAPSHOT_ISOLATION OFF 
// GO
// ALTER DATABASE [ritik258097_] SET PARAMETERIZATION SIMPLE 
// GO
// ALTER DATABASE [ritik258097_] SET READ_COMMITTED_SNAPSHOT OFF 
// GO
// ALTER DATABASE [ritik258097_] SET HONOR_BROKER_PRIORITY OFF 
// GO
// ALTER DATABASE [ritik258097_] SET RECOVERY FULL 
// GO
// ALTER DATABASE [ritik258097_] SET  MULTI_USER 
// GO
// ALTER DATABASE [ritik258097_] SET PAGE_VERIFY CHECKSUM  
// GO
// ALTER DATABASE [ritik258097_] SET DB_CHAINING OFF 
// GO
// ALTER DATABASE [ritik258097_] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
// GO
// ALTER DATABASE [ritik258097_] SET TARGET_RECOVERY_TIME = 60 SECONDS 
// GO
// ALTER DATABASE [ritik258097_] SET DELAYED_DURABILITY = DISABLED 
// GO
// ALTER DATABASE [ritik258097_] SET ACCELERATED_DATABASE_RECOVERY = OFF  
// GO
// EXEC sys.sp_db_vardecimal_storage_format N'ritik258097_', N'ON'
// GO
// ALTER DATABASE [ritik258097_] SET QUERY_STORE = ON
// GO
// ALTER DATABASE [ritik258097_] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
// GO
// /****** Object:  Table [dbo].[cart]    Script Date: 1/11/2025 6:01:52 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[cart](
// 	[cartId] [int] IDENTITY(1,1) NOT NULL,
// 	[userId] [int] NOT NULL,
// 	[createdAt] [datetime] NULL,
// 	[updatedAt] [datetime] NULL,
// PRIMARY KEY CLUSTERED 
// (
// 	[cartId] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY]
// GO
// /****** Object:  Table [dbo].[cart_items]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[cart_items](
// 	[cartItemId] [int] IDENTITY(1,1) NOT NULL,
// 	[cartId] [int] NOT NULL,
// 	[productId] [int] NOT NULL,
// 	[quantity] [int] NOT NULL,
// 	[product_id] [int] NULL,
// PRIMARY KEY CLUSTERED 
// (
// 	[cartItemId] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY]
// GO
// /****** Object:  Table [dbo].[carts]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[carts](
// 	[cartId] [int] IDENTITY(1,1) NOT NULL,
// 	[userId] [int] NOT NULL,
// PRIMARY KEY CLUSTERED 
// (
// 	[cartId] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY]
// GO
// /****** Object:  Table [dbo].[orders]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[orders](
// 	[id] [int] IDENTITY(1,1) NOT NULL,
// 	[userid] [int] NOT NULL,
// 	[product_id] [int] NOT NULL,
// 	[quantity] [int] NOT NULL,
// 	[total_price] [float] NOT NULL,
// 	[status] [varchar](max) NOT NULL,
// 	[order_date] [datetime] NOT NULL,
// 	[delivered_on] [datetime] NULL,
// 	[order_location] [varchar](max) NULL,
// 	[payment_mode] [varchar](max) NOT NULL,
// 	[payment_status] [varchar](max) NOT NULL,
// PRIMARY KEY CLUSTERED 
// (
// 	[id] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
// GO
// /****** Object:  Table [dbo].[Products]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[Products](
// 	[productId] [int] NOT NULL,
// 	[name] [varchar](255) NOT NULL,
// 	[description] [text] NULL,
// 	[imageUrl] [text] NULL,
// 	[category] [varchar](255) NOT NULL,
// 	[subcategory] [varchar](255) NULL,
// 	[inventory] [int] NOT NULL,
// 	[rating] [float] NULL,
// 	[itemsSold] [int] NULL,
// 	[dimensions] [nvarchar](max) NULL,
// 	[createdAt] [datetime] NULL,
// 	[updatedAt] [datetime] NULL,
// 	[price] [float] NULL,
// 	[productIdNew] [int] NULL,
//  CONSTRAINT [PK_Products_ProductId] PRIMARY KEY CLUSTERED 
// (
// 	[productId] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
// GO
// /****** Object:  Table [dbo].[Products2]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[Products2](
// 	[id] [int] IDENTITY(1,1) NOT NULL,
// 	[title] [varchar](255) NOT NULL,
// 	[price] [float] NOT NULL,
// 	[description] [varchar](max) NULL,
// 	[category] [varchar](100) NOT NULL,
// 	[image] [varchar](500) NOT NULL,
// 	[rating] [float] NOT NULL,
// 	[sold_items] [int] NOT NULL,
// 	[add_to_cart] [bit] NULL,
// 	[Inventory] [int] NULL,
// 	[Times_Ordered] [int] NULL,
// 	[Region] [int] NULL,
// PRIMARY KEY CLUSTERED 
// (
// 	[id] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
// GO
// /****** Object:  Table [dbo].[users]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO
// CREATE TABLE [dbo].[users](
// 	[id] [int] IDENTITY(1,1) NOT NULL,
// 	[name] [varchar](max) NULL,
// 	[email] [varchar](max) NULL,
// 	[password] [varchar](max) NULL,
// 	[age] [int] NULL,
// 	[mobileNumber] [varchar](max) NULL,
// 	[address] [varchar](max) NULL,
// PRIMARY KEY CLUSTERED 
// (
// 	[id] ASC
// )WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
// ) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
// GO
// SET IDENTITY_INSERT [dbo].[cart] ON 

// INSERT [dbo].[cart] ([cartId], [userId], [createdAt], [updatedAt]) VALUES (1, 1, CAST(N'2025-01-08T01:12:58.167' AS DateTime), CAST(N'2025-01-08T01:12:58.167' AS DateTime))
// SET IDENTITY_INSERT [dbo].[cart] OFF
// GO
// SET IDENTITY_INSERT [dbo].[cart_items] ON 

// INSERT [dbo].[cart_items] ([cartItemId], [cartId], [productId], [quantity], [product_id]) VALUES (1071, 1, 1001, 3, NULL)
// INSERT [dbo].[cart_items] ([cartItemId], [cartId], [productId], [quantity], [product_id]) VALUES (2047, 1, 1002, 2, NULL)
// SET IDENTITY_INSERT [dbo].[cart_items] OFF
// GO
// SET IDENTITY_INSERT [dbo].[carts] ON 

// INSERT [dbo].[carts] ([cartId], [userId]) VALUES (1, 1)
// SET IDENTITY_INSERT [dbo].[carts] OFF
// GO
// SET IDENTITY_INSERT [dbo].[orders] ON 

// INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (3, 1, 1001, 2, 1599.98, N'pending', CAST(N'2025-01-09T01:21:17.190' AS DateTime), NULL, N'123 Street, City, Country', N'Credit Card', N'Pending')
// SET IDENTITY_INSERT [dbo].[orders] OFF
// GO
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1001, N'Samsung Galaxy S21', N'Experience the next level of mobile technology with the Samsung Galaxy S21. Featuring a stunning 6.2-inch Dynamic AMOLED display with 120Hz refresh rate for ultra-smooth scrolling. Powered by the advanced Exynos 2100 processor and 8GB RAM for exceptional performance. Triple camera setup includes a 64MP telephoto lens, 12MP wide-angle, and 12MP ultra-wide lens for professional-grade photography. 128GB storage capacity, 5G connectivity, and all-day 4000mAh battery with fast charging support. IP68 water and dust resistance rating for added durability.', N'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg', N'Electronics', N'Smartphones', 150, 4.5, 1200, N'151.7 x 71.2 x 7.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 799.99, 1001)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1002, N'iPhone 13 Pro', N'Discover the iPhone 13 Pro with its revolutionary A15 Bionic chip and cutting-edge features. The 6.1-inch Super Retina XDR display with ProMotion delivers incredibly smooth and responsive visuals. Pro camera system features triple 12MP setup with telephoto, wide, and ultra-wide lenses, plus LiDAR Scanner for enhanced AR experiences. Advanced features include Cinematic mode video, ProRes video recording, and Photographic Styles. Enhanced 5G capabilities, Face ID security, and up to 28 hours of video playback. Available in four premium finishes with Ceramic Shield front cover for 4x better drop performance.', N'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg', N'Electronics', N'Smartphones', 200, 4.8, 1500, N'146.7 x 71.5 x 7.7 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 999.99, 1002)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1003, N'Google Pixel 6', N'Meet the Google Pixel 6, powered by Google''s custom-built Tensor chip for groundbreaking AI features. The 6.4-inch OLED display offers vibrant colors and smooth 90Hz refresh rate. Revolutionary dual camera system features a 50MP main sensor and 12MP ultrawide lens, enhanced by advanced AI photography features including Magic Eraser and Real Tone. Live Translate feature breaks down language barriers in real-time. 128GB storage, all-day adaptive battery with fast wireless charging, and Titan M2 security chip. IP68 water resistance and Corning Gorilla Glass Victus protection for ultimate durability.', N'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg', N'Electronics', N'Smartphones', 100, 4.4, 800, N'158.6 x 74.8 x 8.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 599.99, 1003)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1004, N'OnePlus 9', N'The OnePlus 9 redefines mobile photography with its Hasselblad Camera for Mobile. Featuring a 6.55-inch Fluid AMOLED display with 120Hz refresh rate and HDR10+ certification. Triple camera system co-developed with Hasselblad includes 48MP main sensor, 50MP ultra-wide, and 2MP monochrome lens for true-to-life colors. Powered by Snapdragon 888 with 5G capability and 8GB RAM for lightning-fast performance. Warp Charge 65T provides a day''s power in 15 minutes, while Warp Charge 50 Wireless delivers superior wireless charging speeds. OxygenOS 11 provides a smooth, customizable user experience.', N'https://images.pexels.com/photos/7742587/pexels-photo-7742587.jpeg', N'Electronics', N'Smartphones', 75, 4.3, 600, N'160 x 74.2 x 8.7 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 729.99, 1004)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1005, N'Xiaomi Mi 11', N'Experience flagship performance with the Xiaomi Mi 11. Boasting a massive 6.81-inch AMOLED DotDisplay with WQHD+ resolution and 120Hz refresh rate. Powered by the Snapdragon 888 platform with advanced 5G capability. Revolutionary 108MP triple camera system with 8K video recording capability and advanced AI features. Harman Kardon-tuned dual speakers deliver immersive audio experience. 4600mAh battery supports 55W wired turbo charging and 50W wireless charging. Features include AI camera night mode, advanced video capabilities, and MIUI 12.5 with enhanced privacy features.', N'https://images.pexels.com/photos/8885092/pexels-photo-8885092.jpeg', N'Electronics', N'Smartphones', 120, 4.2, 450, N'164.3 x 74.6 x 8.1 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 699.99, 1005)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1006, N'Dell XPS 13', N'The Dell XPS 13 represents the pinnacle of ultrabook design with its InfinityEdge 13.4-inch FHD+ display (1920 x 1200) featuring anti-reflective coating. Powered by 11th Gen Intel Core i7-1185G7 processor and Intel Iris Xe Graphics for superior performance. 16GB LPDDR4x RAM at 4267MHz ensures smooth multitasking, while the 512GB PCIe NVMe SSD provides lightning-fast storage. Features include Killer Wi-Fi 6 AX1650, Thunderbolt 4 ports, and a precision touchpad. The CNC machined aluminum chassis with aerospace-inspired carbon fiber palm rest offers premium build quality. Advanced thermal design with dual fans and heat pipes maintains optimal performance.', N'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg', N'Electronics', N'Laptops', 50, 4.6, 300, N'296 x 199 x 14.8 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 1299.99, 1006)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1007, N'MacBook Pro M1', N'Experience revolutionary performance with the MacBook Pro M1. Features a stunning 13-inch Retina display with True Tone technology and P3 wide color gamut. The Apple M1 chip delivers up to 2.8x faster CPU performance and 5x faster GPU performance. 8GB unified memory architecture provides seamless multitasking capabilities, while 256GB SSD offers ultra-fast storage access. Industry-leading battery life up to 20 hours, studio-quality three-mic array, and Magic Keyboard with Touch Bar enhance productivity. Advanced thermal system maintains sustained performance. Includes Two Thunderbolt/USB 4 ports and secure authentication with Touch ID.', N'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg', N'Electronics', N'Laptops', 75, 4.8, 450, N'304.1 x 212.4 x 15.6 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 1299.99, 1007)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1008, N'Lenovo ThinkPad X1', N'The Lenovo ThinkPad X1 Carbon combines premium features with legendary durability. Boasts a stunning 14-inch 4K UHD (3840 x 2160) IPS anti-glare display with Dolby Vision HDR. Powered by 11th Gen Intel Core i7-1165G7 with vPro and Intel Iris Xe Graphics. Massive 32GB LPDDR4x RAM and 1TB PCIe SSD provide exceptional performance. Features include Intel Wi-Fi 6E, optional 5G capability, and rapid charging technology providing 80% charge in 60 minutes. Military-grade durability with carbon fiber reinforced chassis and spill-resistant keyboard. Advanced security features include match-on-chip fingerprint reader and human presence detection.', N'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg', N'Electronics', N'Laptops', 30, 4.5, 200, N'323 x 217 x 14.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 1799.99, 1008)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1009, N'HP Spectre x360', N'Transform your computing experience with the HP Spectre x360. Features a stunning 13.3-inch OLED touch display with 400 nits brightness and anti-reflection coating. Powered by 11th Gen Intel Core i5 processor and Intel Iris Xe Graphics for exceptional performance. 8GB RAM and 512GB PCIe NVMe M.2 SSD provide smooth multitasking and fast storage. 360° hinge design with gem-cut edges offers versatile usage modes. Includes HP Rechargeable MPP2.0 Tilt Pen for natural inking experience. Bang & Olufsen quad speakers, HP Command Center for performance control, and HP Quick Drop for seamless file sharing enhance productivity.', N'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg', N'Electronics', N'Laptops', 40, 4.3, 150, N'307 x 212 x 14.7 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 1099.99, 1009)
// INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1010, N'ASUS ROG Zephyrus', N'Dominate gaming and content creation with the ASUS ROG Zephyrus. Features a 15.6-inch QHD display with 165Hz refresh rate, 3ms response time, and PANTONE Validated colors. Powered by AMD Ryzen 9 5900HS processor and NVIDIA GeForce RTX 3080 graphics. 32GB DDR4 RAM and 1TB PCIe NVMe SSD deliver uncompromising performance. Advanced cooling system with liquid metal thermal compound and Arc Flow fans maintains optimal temperatures. Features include Wi-Fi 6, USB 3.2 Gen 2 Type-C with Power Delivery and DisplayPort, and ROG Intelligent Cooling thermal system. Customizable RGB keyboard with per-key control.', N'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg', N'Electronics', N'Laptops', 25, 4.7, 180, N'355 x 243.5 x 19.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-09T05:09:16.637' AS DateTime), 1999.99, 1010)
// GO
// SET IDENTITY_INSERT [dbo].[Products2] ON 

// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (1, N'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 109.95, N'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', N'men''s clothing', N'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 3.9, 120, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (2, N'Mens Casual Premium Slim Fit T-Shirts ', 22.3, N'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.', N'men''s clothing', N'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', 4.1, 259, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (3, N'Mens Cotton Jacket', 55.99, N'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.', N'men''s clothing', N'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 4.7, 500, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (4, N'Mens Casual Slim Fit', 15.99, N'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.', N'men''s clothing', N'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 2.1, 430, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (5, N'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, N'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean''s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.', N'jewelery', N'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 4.6, 400, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (6, N'Solid Gold Petite Micropave ', 168, N'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.', N'jewelery', N'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', 3.9, 70, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (7, N'White Gold Plated Princess', 9.99, N'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine''s Day...', N'jewelery', N'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg', 3, 400, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (8, N'Pierced Owl Rose Gold Plated Stainless Steel Double', 10.99, N'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', N'jewelery', N'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', 1.9, 100, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (9, N'WD 2TB Elements Portable External Hard Drive - USB 3.0 ', 64, N'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system', N'electronics', N'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 3.3, 203, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (10, N'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', 109, N'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)', N'electronics', N'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', 2.9, 470, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (11, N'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 109, N'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.', N'electronics', N'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg', 4.8, 319, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (12, N'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 114, N'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer''s limited warranty', N'electronics', N'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg', 4.8, 400, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (13, N'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', 599, N'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz', N'electronics', N'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg', 2.9, 250, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (14, N'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ', 999.99, N'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', N'electronics', N'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg', 2.2, 140, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (15, N'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats', 56.99, N'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates', N'women''s clothing', N'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', 2.6, 235, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (16, N'Lock and Love Women''s Removable Hooded Faux Leather Moto Biker Jacket', 29.95, N'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', N'women''s clothing', N'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg', 2.9, 340, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (17, N'Rain Jacket Women Windbreaker Striped Climbing Raincoats', 39.99, N'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn''t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.', N'women''s clothing', N'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg', 3.8, 679, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (18, N'MBJ Women''s Solid Short Sleeve Boat Neck V ', 9.85, N'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem', N'women''s clothing', N'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', 4.7, 130, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (19, N'Opna Women''s Short Sleeve Moisture', 7.95, N'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort', N'women''s clothing', N'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', 4.5, 146, 0, NULL, NULL, NULL)
// INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (20, N'DANVOUY Womens T Shirt Casual Cotton Short', 12.99, N'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.', N'women''s clothing', N'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 3.6, 145, 0, NULL, NULL, NULL)
// SET IDENTITY_INSERT [dbo].[Products2] OFF
// GO
// SET IDENTITY_INSERT [dbo].[users] ON 

// INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address]) VALUES (1, N'Ritik Kumar Sharma', N'ritiksharmaformal@gmail.com', N'$2b$12$xoER4znOL.eiSpe8J4.Zyuz8gLY6Xoq/Be76hb1mh0U2x3pl93P5y', 32, N'0891748921', N'Bampada,birlatyre,balasore,odisha p
// bampada, near birla tyre pin-756056')
// SET IDENTITY_INSERT [dbo].[users] OFF
// GO
// ALTER TABLE [dbo].[cart] ADD  DEFAULT (getdate()) FOR [createdAt]
// GO
// ALTER TABLE [dbo].[cart] ADD  DEFAULT (getdate()) FOR [updatedAt]
// GO
// ALTER TABLE [dbo].[cart_items] ADD  DEFAULT ((1)) FOR [quantity]
// GO
// ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [inventory]
// GO
// ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [itemsSold]
// GO
// ALTER TABLE [dbo].[Products] ADD  DEFAULT (getdate()) FOR [createdAt]
// GO
// ALTER TABLE [dbo].[Products] ADD  DEFAULT (getdate()) FOR [updatedAt]
// GO
// ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [add_to_cart]
// GO
// ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [Inventory]
// GO
// ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [Times_Ordered]
// GO
// ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [Region]
// GO
// ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD FOREIGN KEY([cartId])
// REFERENCES [dbo].[cart] ([cartId])
// GO
// ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FK_cartId] FOREIGN KEY([cartId])
// REFERENCES [dbo].[cart] ([cartId])
// GO
// ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FK_cartId]
// GO
// ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FK_CartItems_Products] FOREIGN KEY([product_id])
// REFERENCES [dbo].[Products] ([productId])
// GO
// ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FK_CartItems_Products]
// GO
// ALTER TABLE [dbo].[carts]  WITH CHECK ADD FOREIGN KEY([userId])
// REFERENCES [dbo].[users] ([id])
// GO
// ALTER TABLE [dbo].[orders]  WITH CHECK ADD FOREIGN KEY([product_id])
// REFERENCES [dbo].[Products] ([productId])
// GO
// ALTER TABLE [dbo].[orders]  WITH CHECK ADD FOREIGN KEY([userid])
// REFERENCES [dbo].[users] ([id])
// GO
// ALTER TABLE [dbo].[Products]  WITH CHECK ADD CHECK  (([rating]>=(0) AND [rating]<=(5)))
// GO
// /****** Object:  Trigger [dbo].[trg_UpdateTimestamp]    Script Date: 1/11/2025 6:01:53 PM ******/
// SET ANSI_NULLS ON
// GO
// SET QUOTED_IDENTIFIER ON
// GO

// CREATE TRIGGER [dbo].[trg_UpdateTimestamp]
// ON [dbo].[Products]
// AFTER UPDATE
// AS
// BEGIN
//     SET NOCOUNT ON;
//     UPDATE Products
//     SET updatedAt = GETDATE()
//     WHERE productId IN (SELECT DISTINCT productId FROM Inserted);
// END;
// GO
// ALTER TABLE [dbo].[Products] ENABLE TRIGGER [trg_UpdateTimestamp]
// GO
// ALTER DATABASE [ritik258097_] SET  READ_WRITE 
// GO
