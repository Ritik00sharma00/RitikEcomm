USE [master]
GO
/****** Object:  Database [Ritik_Ecomm]    Script Date: 1/26/2025 11:44:59 AM ******/
CREATE DATABASE [Ritik_Ecomm]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Ecommerce_Project', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\Ecommerce_Project.mdf' , SIZE = 73728KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Ecommerce_Project_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL16.MSSQLSERVER\MSSQL\DATA\Ecommerce_Project_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT, LEDGER = OFF
GO
ALTER DATABASE [Ritik_Ecomm] SET COMPATIBILITY_LEVEL = 160
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Ritik_Ecomm].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Ritik_Ecomm] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET ARITHABORT OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Ritik_Ecomm] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Ritik_Ecomm] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET  ENABLE_BROKER 
GO
ALTER DATABASE [Ritik_Ecomm] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Ritik_Ecomm] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET RECOVERY FULL 
GO
ALTER DATABASE [Ritik_Ecomm] SET  MULTI_USER 
GO
ALTER DATABASE [Ritik_Ecomm] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Ritik_Ecomm] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Ritik_Ecomm] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Ritik_Ecomm] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Ritik_Ecomm] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Ritik_Ecomm] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'Ritik_Ecomm', N'ON'
GO
ALTER DATABASE [Ritik_Ecomm] SET QUERY_STORE = ON
GO
ALTER DATABASE [Ritik_Ecomm] SET QUERY_STORE (OPERATION_MODE = READ_WRITE, CLEANUP_POLICY = (STALE_QUERY_THRESHOLD_DAYS = 30), DATA_FLUSH_INTERVAL_SECONDS = 900, INTERVAL_LENGTH_MINUTES = 60, MAX_STORAGE_SIZE_MB = 1000, QUERY_CAPTURE_MODE = AUTO, SIZE_BASED_CLEANUP_MODE = AUTO, MAX_PLANS_PER_QUERY = 200, WAIT_STATS_CAPTURE_MODE = ON)
GO
USE [Ritik_Ecomm]
GO
/****** Object:  Table [dbo].[cart]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart](
	[cartId] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
	[createdAt] [datetime] NULL,
	[updatedAt] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[cartId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cart_items]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cart_items](
	[cartItemId] [int] IDENTITY(1,1) NOT NULL,
	[cartId] [int] NOT NULL,
	[productId] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[product_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[cartItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[carts]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[carts](
	[cartId] [int] IDENTITY(1,1) NOT NULL,
	[userId] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[cartId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[orders]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[orders](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[userid] [int] NOT NULL,
	[product_id] [int] NOT NULL,
	[quantity] [int] NOT NULL,
	[total_price] [float] NOT NULL,
	[status] [varchar](max) NOT NULL,
	[order_date] [datetime] NOT NULL,
	[delivered_on] [datetime] NULL,
	[order_location] [varchar](max) NULL,
	[payment_mode] [varchar](max) NOT NULL,
	[payment_status] [varchar](max) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[productId] [int] NOT NULL,
	[name] [varchar](255) NOT NULL,
	[description] [text] NULL,
	[imageUrl] [text] NULL,
	[category] [varchar](255) NOT NULL,
	[subcategory] [varchar](255) NULL,
	[inventory] [int] NOT NULL,
	[rating] [float] NULL,
	[itemsSold] [int] NULL,
	[dimensions] [nvarchar](max) NULL,
	[createdAt] [datetime] NULL,
	[updatedAt] [datetime] NULL,
	[price] [float] NULL,
	[productIdNew] [int] NULL,
 CONSTRAINT [PK_Products_ProductId] PRIMARY KEY CLUSTERED 
(
	[productId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products2]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products2](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[title] [varchar](255) NOT NULL,
	[price] [float] NOT NULL,
	[description] [varchar](max) NULL,
	[category] [varchar](100) NOT NULL,
	[image] [varchar](500) NOT NULL,
	[rating] [float] NOT NULL,
	[sold_items] [int] NOT NULL,
	[add_to_cart] [bit] NULL,
	[Inventory] [int] NULL,
	[Times_Ordered] [int] NULL,
	[Region] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[users]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[users](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](max) NULL,
	[email] [varchar](max) NULL,
	[password] [varchar](max) NULL,
	[age] [int] NULL,
	[mobileNumber] [varchar](max) NULL,
	[address] [varchar](max) NULL,
	[role] [nvarchar](25) NULL,
	[city] [nvarchar](200) NULL,
	[gender] [nvarchar](25) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[cart] ON 

INSERT [dbo].[cart] ([cartId], [userId], [createdAt], [updatedAt]) VALUES (1, 1, CAST(N'2025-01-08T01:12:58.167' AS DateTime), CAST(N'2025-01-08T01:12:58.167' AS DateTime))
INSERT [dbo].[cart] ([cartId], [userId], [createdAt], [updatedAt]) VALUES (2, 4, CAST(N'2025-01-19T23:21:31.890' AS DateTime), CAST(N'2025-01-19T23:21:31.890' AS DateTime))
SET IDENTITY_INSERT [dbo].[cart] OFF
GO
SET IDENTITY_INSERT [dbo].[cart_items] ON 

INSERT [dbo].[cart_items] ([cartItemId], [cartId], [productId], [quantity], [product_id]) VALUES (3047, 1, 1002, 2, NULL)
INSERT [dbo].[cart_items] ([cartItemId], [cartId], [productId], [quantity], [product_id]) VALUES (3048, 1, 1003, 4, NULL)
INSERT [dbo].[cart_items] ([cartItemId], [cartId], [productId], [quantity], [product_id]) VALUES (5047, 1, 1001, 1, NULL)
INSERT [dbo].[cart_items] ([cartItemId], [cartId], [productId], [quantity], [product_id]) VALUES (5048, 2, 1001, 2, NULL)
SET IDENTITY_INSERT [dbo].[cart_items] OFF
GO
SET IDENTITY_INSERT [dbo].[carts] ON 

INSERT [dbo].[carts] ([cartId], [userId]) VALUES (1, 1)
SET IDENTITY_INSERT [dbo].[carts] OFF
GO
SET IDENTITY_INSERT [dbo].[orders] ON 

INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (3, 1, 1001, 2, 1599.98, N'pending', CAST(N'2025-01-09T01:21:17.190' AS DateTime), NULL, N'123 Street, City, Country', N'Credit Card', N'Pending')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2004, 4, 1001, 1, 799.99, N'Declined', CAST(N'2025-01-20T03:15:06.880' AS DateTime), CAST(N'2025-01-25T03:14:58.450' AS DateTime), N'Greater Noida', N'Credit Card', N'Pending')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2005, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:18:03.677' AS DateTime), CAST(N'2025-01-25T03:18:03.540' AS DateTime), N'Greater Noida', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2006, 4, 1001, 1, 799.99, N'Declined', CAST(N'2025-01-20T03:18:05.167' AS DateTime), CAST(N'2025-01-25T03:18:05.150' AS DateTime), N'Greater Noida', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2007, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:18:33.863' AS DateTime), CAST(N'2025-01-25T03:18:33.780' AS DateTime), N'', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2008, 4, 1001, 1, 799.99, N'Declined', CAST(N'2025-01-20T03:18:35.313' AS DateTime), CAST(N'2025-01-25T03:18:35.277' AS DateTime), N'', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2009, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:19:18.380' AS DateTime), CAST(N'2025-01-25T03:19:18.347' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2010, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:19:44.937' AS DateTime), CAST(N'2025-01-25T03:19:44.910' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2011, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:20:17.030' AS DateTime), CAST(N'2025-01-25T03:20:16.863' AS DateTime), N'Greater Noida', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2012, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:20:56.860' AS DateTime), CAST(N'2025-01-25T03:20:56.823' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2013, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:24:40.737' AS DateTime), CAST(N'2025-01-25T03:24:40.697' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2014, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:26:31.873' AS DateTime), CAST(N'2025-01-25T03:26:31.817' AS DateTime), N'Greater Noida', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2015, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:26:59.310' AS DateTime), CAST(N'2025-01-25T03:26:59.267' AS DateTime), N'Greater Noida', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2016, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:27:41.260' AS DateTime), CAST(N'2025-01-25T03:27:41.207' AS DateTime), N'Greater Noida', N'Credit Card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2017, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:29:25.893' AS DateTime), CAST(N'2025-01-25T03:29:23.883' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2018, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:30:12.270' AS DateTime), CAST(N'2025-01-25T03:30:10.807' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (2019, 4, 1001, 1, 799.99, N'pending', CAST(N'2025-01-20T03:34:05.697' AS DateTime), CAST(N'2025-01-25T03:33:58.860' AS DateTime), N'Bampada,birlatyre,balasore,odisha p', N'card', N'Completed')
INSERT [dbo].[orders] ([id], [userid], [product_id], [quantity], [total_price], [status], [order_date], [delivered_on], [order_location], [payment_mode], [payment_status]) VALUES (3002, 5, 1001, 1, 799.99, N'pending', CAST(N'2025-01-26T02:38:13.720' AS DateTime), CAST(N'2025-01-31T02:38:11.567' AS DateTime), N'Greater Noida', N'card', N'Completed')
SET IDENTITY_INSERT [dbo].[orders] OFF
GO
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1001, N'Samsung Galaxy S21', N'Experience the next level of mobile technology with the Samsung Galaxy S21. Featuring a stunning 6.2-inch Dynamic AMOLED display with 120Hz refresh rate for ultra-smooth scrolling. Powered by the advanced Exynos 2100 processor and 8GB RAM for exceptional performance. Triple camera setup includes a 64MP telephoto lens, 12MP wide-angle, and 12MP ultra-wide lens for professional-grade photography. 128GB storage capacity, 5G connectivity, and all-day 4000mAh battery with fast charging support. IP68 water and dust resistance rating for added durability.', N'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg', N'Electronics', N'Smartphones', 150, 4, 1200, N'151.7 x 71.2 x 7.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 799.99, 1001)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1002, N'iPhone 13 Pro', N'Discover the iPhone 13 Pro with its revolutionary A15 Bionic chip and cutting-edge features. The 6.1-inch Super Retina XDR display with ProMotion delivers incredibly smooth and responsive visuals. Pro camera system features triple 12MP setup with telephoto, wide, and ultra-wide lenses, plus LiDAR Scanner for enhanced AR experiences. Advanced features include Cinematic mode video, ProRes video recording, and Photographic Styles. Enhanced 5G capabilities, Face ID security, and up to 28 hours of video playback. Available in four premium finishes with Ceramic Shield front cover for 4x better drop performance.', N'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg', N'Electronics', N'Smartphones', 200, 4.3, 1500, N'146.7 x 71.5 x 7.7 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 999.99, 1002)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1003, N'Google Pixel 6', N'Meet the Google Pixel 6, powered by Google''s custom-built Tensor chip for groundbreaking AI features. The 6.4-inch OLED display offers vibrant colors and smooth 90Hz refresh rate. Revolutionary dual camera system features a 50MP main sensor and 12MP ultrawide lens, enhanced by advanced AI photography features including Magic Eraser and Real Tone. Live Translate feature breaks down language barriers in real-time. 128GB storage, all-day adaptive battery with fast wireless charging, and Titan M2 security chip. IP68 water resistance and Corning Gorilla Glass Victus protection for ultimate durability.', N'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg', N'Electronics', N'Smartphones', 100, 3.9, 800, N'158.6 x 74.8 x 8.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 599.99, 1003)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1004, N'OnePlus 9', N'The OnePlus 9 redefines mobile photography with its Hasselblad Camera for Mobile. Featuring a 6.55-inch Fluid AMOLED display with 120Hz refresh rate and HDR10+ certification. Triple camera system co-developed with Hasselblad includes 48MP main sensor, 50MP ultra-wide, and 2MP monochrome lens for true-to-life colors. Powered by Snapdragon 888 with 5G capability and 8GB RAM for lightning-fast performance. Warp Charge 65T provides a day''s power in 15 minutes, while Warp Charge 50 Wireless delivers superior wireless charging speeds. OxygenOS 11 provides a smooth, customizable user experience.', N'https://images.pexels.com/photos/7742587/pexels-photo-7742587.jpeg', N'Electronics', N'Smartphones', 75, 3.8, 600, N'160 x 74.2 x 8.7 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 729.99, 1004)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1005, N'Xiaomi Mi 11', N'Experience flagship performance with the Xiaomi Mi 11. Boasting a massive 6.81-inch AMOLED DotDisplay with WQHD+ resolution and 120Hz refresh rate. Powered by the Snapdragon 888 platform with advanced 5G capability. Revolutionary 108MP triple camera system with 8K video recording capability and advanced AI features. Harman Kardon-tuned dual speakers deliver immersive audio experience. 4600mAh battery supports 55W wired turbo charging and 50W wireless charging. Features include AI camera night mode, advanced video capabilities, and MIUI 12.5 with enhanced privacy features.', N'https://images.pexels.com/photos/8885092/pexels-photo-8885092.jpeg', N'Electronics', N'Smartphones', 120, 3.7, 450, N'164.3 x 74.6 x 8.1 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 699.99, 1005)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1006, N'Dell XPS 13', N'The Dell XPS 13 represents the pinnacle of ultrabook design with its InfinityEdge 13.4-inch FHD+ display (1920 x 1200) featuring anti-reflective coating. Powered by 11th Gen Intel Core i7-1185G7 processor and Intel Iris Xe Graphics for superior performance. 16GB LPDDR4x RAM at 4267MHz ensures smooth multitasking, while the 512GB PCIe NVMe SSD provides lightning-fast storage. Features include Killer Wi-Fi 6 AX1650, Thunderbolt 4 ports, and a precision touchpad. The CNC machined aluminum chassis with aerospace-inspired carbon fiber palm rest offers premium build quality. Advanced thermal design with dual fans and heat pipes maintains optimal performance.', N'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg', N'Electronics', N'Laptops', 50, 4.1, 300, N'296 x 199 x 14.8 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 1299.99, 1006)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1007, N'MacBook Pro M1', N'Experience revolutionary performance with the MacBook Pro M1. Features a stunning 13-inch Retina display with True Tone technology and P3 wide color gamut. The Apple M1 chip delivers up to 2.8x faster CPU performance and 5x faster GPU performance. 8GB unified memory architecture provides seamless multitasking capabilities, while 256GB SSD offers ultra-fast storage access. Industry-leading battery life up to 20 hours, studio-quality three-mic array, and Magic Keyboard with Touch Bar enhance productivity. Advanced thermal system maintains sustained performance. Includes Two Thunderbolt/USB 4 ports and secure authentication with Touch ID.', N'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg', N'Electronics', N'Laptops', 75, 4.3, 450, N'304.1 x 212.4 x 15.6 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 1299.99, 1007)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1008, N'Lenovo ThinkPad X1', N'The Lenovo ThinkPad X1 Carbon combines premium features with legendary durability. Boasts a stunning 14-inch 4K UHD (3840 x 2160) IPS anti-glare display with Dolby Vision HDR. Powered by 11th Gen Intel Core i7-1165G7 with vPro and Intel Iris Xe Graphics. Massive 32GB LPDDR4x RAM and 1TB PCIe SSD provide exceptional performance. Features include Intel Wi-Fi 6E, optional 5G capability, and rapid charging technology providing 80% charge in 60 minutes. Military-grade durability with carbon fiber reinforced chassis and spill-resistant keyboard. Advanced security features include match-on-chip fingerprint reader and human presence detection.', N'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg', N'Electronics', N'Laptops', 30, 4, 200, N'323 x 217 x 14.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 1799.99, 1008)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1009, N'HP Spectre x360', N'Transform your computing experience with the HP Spectre x360. Features a stunning 13.3-inch OLED touch display with 400 nits brightness and anti-reflection coating. Powered by 11th Gen Intel Core i5 processor and Intel Iris Xe Graphics for exceptional performance. 8GB RAM and 512GB PCIe NVMe M.2 SSD provide smooth multitasking and fast storage. 360° hinge design with gem-cut edges offers versatile usage modes. Includes HP Rechargeable MPP2.0 Tilt Pen for natural inking experience. Bang & Olufsen quad speakers, HP Command Center for performance control, and HP Quick Drop for seamless file sharing enhance productivity.', N'https://images.pexels.com/photos/209151/pexels-photo-209151.jpeg', N'Electronics', N'Laptops', 40, 3.8, 150, N'307 x 212 x 14.7 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 1099.99, 1009)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1010, N'ASUS ROG Zephyrus', N'Dominate gaming and content creation with the ASUS ROG Zephyrus. Features a 15.6-inch QHD display with 165Hz refresh rate, 3ms response time, and PANTONE Validated colors. Powered by AMD Ryzen 9 5900HS processor and NVIDIA GeForce RTX 3080 graphics. 32GB DDR4 RAM and 1TB PCIe NVMe SSD deliver uncompromising performance. Advanced cooling system with liquid metal thermal compound and Arc Flow fans maintains optimal temperatures. Features include Wi-Fi 6, USB 3.2 Gen 2 Type-C with Power Delivery and DisplayPort, and ROG Intelligent Cooling thermal system. Customizable RGB keyboard with per-key control.', N'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg', N'Electronics', N'Laptops', 25, 4.2, 180, N'355 x 243.5 x 19.9 mm', CAST(N'2025-01-04T23:41:15.210' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 1999.99, 1010)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1203, N'Cotton Casual Shirt', N'Comfortable cotton shirt for daily wear', N'https://www.uniqlo.com/jp/ja/contents/feature/common/imgs/goods/456843/item/69_456843_large.jpg', N'Clothing', N'Shirts', 100, 3.8, 200, N'M, L, XL', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 29.99, 9)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1204, N'Formal Business Shirt', N'Professional white collar shirt', N'https://www.charlestyrwhitt.com/dw/image/v2/AAWJ_PRD/on/demandware.static/-/Sites-ctshirts-master/default/dw2934e918/hi-res/FON0639WHT_COLLAR_SHOT.jpg', N'Clothing', N'Shirts', 80, 3.9, 150, N'S, M, L, XL', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 49.99, 10)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1205, N'Printed T-Shirt', N'Graphic printed casual t-shirt', N'https://www.gap.com/webcontent/0028/977/598/cn28977598.jpg', N'Clothing', N'Shirts', 120, 3.7, 180, N'XS, S, M, L', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 19.99, 11)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1206, N'Polo Shirt', N'Classic polo shirt for casual wear', N'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', N'Clothing', N'Shirts', 90, 3.8, 160, N'M, L, XL, XXL', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-25T00:29:36.040' AS DateTime), 34.99, 12)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1207, N'Slim Fit Jeans', N'Classic blue denim jeans', N'https://levi.scene7.com/is/image/Levi/229990008-front-pdp?fmt=jpeg&qlt=70,1&op_sharpen=0&resMode=sharp2&op_usm=0.8,1,10,0&fit=crop,0&wid=700&hei=938', N'Clothing', N'Pants', 75, 4, 130, N'30x32, 32x32, 34x32', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 59.99, 13)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1208, N'Chino Pants', N'Casual khaki chino pants', N'https://www.dockers.com/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-dockers-master/default/dwd671e251/images/products/479190403_front.jpg', N'Clothing', N'Pants', 60, 3.9, 110, N'30x30, 32x30, 34x30', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 44.99, 14)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1209, N'Track Pants', N'Comfortable athletic pants', N'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d80db8f35bb4d7eb7f1ac480137aa2f_9366/Essentials_Warm-Up_Tapered_3-Stripes_Track_Pants_Black_GK8831_21_model.jpg', N'Clothing', N'Pants', 85, 3.8, 140, N'S, M, L, XL', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 39.99, 15)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1210, N'Formal Trousers', N'Business formal pants', N'https://www.brooksbrothers.com/on/demandware.static/-/Sites-brooks-master/default/dw8bee0728/images/products/8/800951583_GREY_G_LRG.jpg', N'Clothing', N'Pants', 70, 3.9, 120, N'30x32, 32x32, 34x32', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 69.99, 16)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1211, N'Modern Sofa Set', N'3-seater comfortable sofa', N'https://www.ikea.com/us/en/images/products/soederhamn-sofa-with-chaise-finnsta-white__0406299_pe583237_s5.jpg', N'Home & Living', N'Furniture', 10, 4.1, 15, N'180 x 85 x 70 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 899.99, 17)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1212, N'Coffee Table', N'Wooden coffee table with storage', N'https://www.ikea.com/us/en/images/products/listerby-coffee-table-white-stained-oak__0945571_pe797734_s5.jpg', N'Home & Living', N'Furniture', 15, 4, 25, N'120 x 60 x 45 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 199.99, 18)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1213, N'Dining Set', N'6-seater dining table with chairs', N'https://www.ikea.com/us/en/images/products/ekedalen-ekedalen-table-and-4-chairs-dark-brown-orrsta-light-grey__0747138_pe744359_s5.jpg', N'Home & Living', N'Furniture', 8, 4.2, 12, N'150 x 90 x 75 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 799.99, 19)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1214, N'Bookshelf', N'5-tier modern bookshelf', N'https://www.ikea.com/us/en/images/products/kallax-shelf-unit-white__0644757_pe702939_s5.jpg', N'Home & Living', N'Furniture', 20, 3.9, 30, N'80 x 30 x 180 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 149.99, 20)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1215, N'Wall Clock', N'Modern minimalist wall clock', N'https://www.ikea.com/us/en/images/products/panorera-wall-clock-black__0633571_pe695905_s5.jpg', N'Home & Living', N'Decor', 40, 3.8, 65, N'30 cm diameter', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 29.99, 21)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1216, N'Table Lamp', N'Bedside table lamp with warm light', N'https://www.ikea.com/us/en/images/products/forsa-work-lamp-with-led-bulb-nickel-plated__0687094_pe721931_s5.jpg', N'Home & Living', N'Decor', 35, 3.9, 55, N'15 x 15 x 35 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 39.99, 22)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1217, N'Wall Art', N'Abstract canvas painting', N'https://www.ikea.com/us/en/images/products/pjaetteryd-picture-blue-moon__0803741_pe768912_s5.jpg', N'Home & Living', N'Decor', 25, 4, 40, N'60 x 90 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 79.99, 23)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (1218, N'Throw Pillows', N'Decorative sofa pillows set of 4', N'https://www.ikea.com/us/en/images/products/vigdis-cushion-cover-blue__0887953_pe569692_s5.jpg', N'Home & Living', N'Decor', 50, 3.7, 75, N'45 x 45 cm', CAST(N'2025-01-21T23:06:15.243' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 49.99, 24)
INSERT [dbo].[Products] ([productId], [name], [description], [imageUrl], [category], [subcategory], [inventory], [rating], [itemsSold], [dimensions], [createdAt], [updatedAt], [price], [productIdNew]) VALUES (2001, N'Cotton Casual Shirt', N'Comfortable cotton shirt for daily wear', N'https://example.com/images/casualshirt.jpg', N'Clothing', N'Shirts', 100, 3.8, 200, N'M, L, XL', CAST(N'2025-01-21T22:53:53.250' AS DateTime), CAST(N'2025-01-21T23:16:55.857' AS DateTime), 29.99, 9)
GO
SET IDENTITY_INSERT [dbo].[Products2] ON 

INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (1, N'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', 109.95, N'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday', N'men''s clothing', N'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg', 3.9, 120, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (2, N'Mens Casual Premium Slim Fit T-Shirts ', 22.3, N'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.', N'men''s clothing', N'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg', 4.1, 259, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (3, N'Mens Cotton Jacket', 55.99, N'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.', N'men''s clothing', N'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg', 4.7, 500, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (4, N'Mens Casual Slim Fit', 15.99, N'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.', N'men''s clothing', N'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg', 2.1, 430, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (5, N'John Hardy Women''s Legends Naga Gold & Silver Dragon Station Chain Bracelet', 695, N'From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean''s pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.', N'jewelery', N'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg', 4.6, 400, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (6, N'Solid Gold Petite Micropave ', 168, N'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.', N'jewelery', N'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg', 3.9, 70, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (7, N'White Gold Plated Princess', 9.99, N'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine''s Day...', N'jewelery', N'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg', 3, 400, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (8, N'Pierced Owl Rose Gold Plated Stainless Steel Double', 10.99, N'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel', N'jewelery', N'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg', 1.9, 100, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (9, N'WD 2TB Elements Portable External Hard Drive - USB 3.0 ', 64, N'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system', N'electronics', N'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg', 3.3, 203, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (10, N'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', 109, N'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)', N'electronics', N'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg', 2.9, 470, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (11, N'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5', 109, N'3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.', N'electronics', N'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg', 4.8, 319, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (12, N'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive', 114, N'Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer''s limited warranty', N'electronics', N'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg', 4.8, 400, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (13, N'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin', 599, N'21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz', N'electronics', N'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg', 2.9, 250, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (14, N'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ', 999.99, N'49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag', N'electronics', N'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg', 2.2, 140, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (15, N'BIYLACLESEN Women''s 3-in-1 Snowboard Jacket Winter Coats', 56.99, N'Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates', N'women''s clothing', N'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg', 2.6, 235, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (16, N'Lock and Love Women''s Removable Hooded Faux Leather Moto Biker Jacket', 29.95, N'100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON', N'women''s clothing', N'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg', 2.9, 340, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (17, N'Rain Jacket Women Windbreaker Striped Climbing Raincoats', 39.99, N'Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn''t overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.', N'women''s clothing', N'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg', 3.8, 679, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (18, N'MBJ Women''s Solid Short Sleeve Boat Neck V ', 9.85, N'95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem', N'women''s clothing', N'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg', 4.7, 130, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (19, N'Opna Women''s Short Sleeve Moisture', 7.95, N'100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort', N'women''s clothing', N'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg', 4.5, 146, 0, NULL, NULL, NULL)
INSERT [dbo].[Products2] ([id], [title], [price], [description], [category], [image], [rating], [sold_items], [add_to_cart], [Inventory], [Times_Ordered], [Region]) VALUES (20, N'DANVOUY Womens T Shirt Casual Cotton Short', 12.99, N'95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.', N'women''s clothing', N'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg', 3.6, 145, 0, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Products2] OFF
GO
SET IDENTITY_INSERT [dbo].[users] ON 

INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (1, N'Ritik Kumar Sharma', N'ritiksharmaformal@gmail.com', N'$2b$12$xoER4znOL.eiSpe8J4.Zyuz8gLY6Xoq/Be76hb1mh0U2x3pl93P5y', 32, N'0891748921', N'Bampada,birlatyre,balasore,odisha p
bampada, near birla tyre pin-756056', N'user', N'odisha', N'female')
INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (2, N'Ritik Kumar Sharma', N'ritikshformal@gmail.com', N'$2b$12$wA0tkX87PXuJWH6A7s6pXO3mO5y/Z/EICojpjg1AciFFMGGaIjhBa', 23, N'08917489217', N'Greater Noida', N'user', N'Dehradun', N'female')
INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (3, N'Abc', N'Abc@gmail.com', N'$2b$12$177iywikVpNAitNB1nA/w.KjasvhCvRf/lSpioZabKVJ17azdYbRm', 19, N'1234567898', N'Bampada,birlatyre,balasore,odisha p
bampada, near birla tyre pin-756056', N'user', N'London', N'male')
INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (4, N'A', N'A@gmail.com', N'$2b$12$XybRfOlu.HawBW9Ioazx9OBddEYnoD141shCwQPZjHWID49mWv9HO', 28, N'14702882495', N'Bampada,birlatyre,balasore,odisha p
bampada, near birla tyre pin-756056', N'user', N'London', N'female')
INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (5, N'Raxion', N'Raxion@gmail.com', N'$2b$12$pHvpUz/BpKwbL0MdujbkUO7fcVYK6eaiQdsEmdsRJtM5X1vK6eI8y', 23, N'8917489217', N'New York Pin -986500', N'user', N'Dehradun', N'female')
INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (1005, N'AdminRitik@gmail.com', N'AdminRitik@gmail.com', N'$2b$12$GThOsXgx3uokH8fWE6MtC.po/2j43t5tVo0mDjLwwHPNpYfFUwhiK', 20, N'987456321', N'Texas Alabamia', N'admin', N'Melbourne', N'male')
INSERT [dbo].[users] ([id], [name], [email], [password], [age], [mobileNumber], [address], [role], [city], [gender]) VALUES (1006, N'Batman', N'Banbv@gmail.com', N'$2b$12$btD4gR0YiR4E5UHfw4rc4eZ4CnuIYIMj2CmaLP7QvF08L3UYgSEmu', 23, N'4569633217', N'Shillong pin98979', N'user', N'Owen', N'male')
SET IDENTITY_INSERT [dbo].[users] OFF
GO
ALTER TABLE [dbo].[cart] ADD  DEFAULT (getdate()) FOR [createdAt]
GO
ALTER TABLE [dbo].[cart] ADD  DEFAULT (getdate()) FOR [updatedAt]
GO
ALTER TABLE [dbo].[cart_items] ADD  DEFAULT ((1)) FOR [quantity]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [inventory]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT ((0)) FOR [itemsSold]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (getdate()) FOR [createdAt]
GO
ALTER TABLE [dbo].[Products] ADD  DEFAULT (getdate()) FOR [updatedAt]
GO
ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [add_to_cart]
GO
ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [Inventory]
GO
ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [Times_Ordered]
GO
ALTER TABLE [dbo].[Products2] ADD  DEFAULT ((0)) FOR [Region]
GO
ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD FOREIGN KEY([cartId])
REFERENCES [dbo].[cart] ([cartId])
GO
ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FK_cartId] FOREIGN KEY([cartId])
REFERENCES [dbo].[cart] ([cartId])
GO
ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FK_cartId]
GO
ALTER TABLE [dbo].[cart_items]  WITH CHECK ADD  CONSTRAINT [FK_CartItems_Products] FOREIGN KEY([product_id])
REFERENCES [dbo].[Products] ([productId])
GO
ALTER TABLE [dbo].[cart_items] CHECK CONSTRAINT [FK_CartItems_Products]
GO
ALTER TABLE [dbo].[carts]  WITH CHECK ADD FOREIGN KEY([userId])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD FOREIGN KEY([product_id])
REFERENCES [dbo].[Products] ([productId])
GO
ALTER TABLE [dbo].[orders]  WITH CHECK ADD FOREIGN KEY([userid])
REFERENCES [dbo].[users] ([id])
GO
ALTER TABLE [dbo].[Products]  WITH CHECK ADD CHECK  (([rating]>=(0) AND [rating]<=(5)))
GO
/****** Object:  Trigger [dbo].[trg_UpdateTimestamp]    Script Date: 1/26/2025 11:45:00 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE TRIGGER [dbo].[trg_UpdateTimestamp]
ON [dbo].[Products]
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    UPDATE Products
    SET updatedAt = GETDATE()
    WHERE productId IN (SELECT DISTINCT productId FROM Inserted);
END;
GO
ALTER TABLE [dbo].[Products] ENABLE TRIGGER [trg_UpdateTimestamp]
GO
USE [master]
GO
ALTER DATABASE [Ritik_Ecomm] SET  READ_WRITE 
GO
