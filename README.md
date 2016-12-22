# 乐淘商城接口文档
## 测试地址

# 商城前台接口汇总

###用户模块

- [注册接口](#register)
- [登录接口](#login)
- [登出接口](#logout)
- [修改密码](#updatepassword)

###产品模块

- [搜索产品](#queryProduct)  排序 价格、图片、名称
- [产品详情](#queryProductDetail) 

###分类模块

- [一级分类查询](#queryTopCategory)  
- [二级分类查询](#querySecondCategory)

###购物车

- [添加](#addCart)  件、尺码   尺码 string 区间 ？
- [修改](#updateCart) 件、尺码
- [删除](#deleteCart) 单删、全删
- [查询](#queryCart) 带产品信息

###收货地址模块  三级联动  要一个树状对象

- [添加](#addAddress) 
- [修改](#updateAddress) 
- [删除](#deleteAddress) 
- [查询](#queryAddress) 
- [查询](#queryAddressTree) 

## 商城后台接口汇总

###员工模块

- [登录接口](#employeeLogin)
- [登出接口](#employeeLogout)

###产品模块

- [产品新增](#addProduct)  
- [产品修改](#updateProduct) 
- [产品详情](#queryProductDetail)

###分类模块

- [一级分类新增](#addTopCategory)   
- [一级分类修改](#updateTopCategory)
- [一级分类查询](#queryTopCategoryPaging)   分页  页数、每页条数
- [二级分类新增](#addSecondCategory)  
- [二级分类修改](#updateSecondCategory)  
- [二级分类查询](#querySecondCategoryPaging)   分页  页数、每页条数

###用户模块
- [用户查询](#queryUser)  
- [用户启用停用](#updateUser)
- [品牌销量比较]()  写死
- [某产品按时间的销量图]()    写死

#网站前台接口描述信息
## 用户模块
### register 
+ 接口名称
  注册接口
+ 接口地址
  /user/register
+ 请求方式
    POST
+ 参数说明
参数名称|是否必须|说明
--|--|--
username|是|用户名
password|是|用户密码
mobile|是|用户手机号
+ 示例
```javascript
{"username":"zhoushugang","password","123456","mobile":"15111111111"}
```
+ 返回说明
参数|说明
--|--
success|注册成功
error|操作失败
+ 示例
```javascript
{"success":true}
{ "error": 403, "message": "用户名未填写！" }
{ "error": 403, "message": "密码未填写！" }
{ "error": 403, "message": "用户名已经存在!!!" }
{ "error": 403, "message": "手机号已注册过!!!" }
{ "error": 403, "message": "数据库异常！" }
```

### login
+ 接口名称
  登录接口
+ 接口地址
   /user/login
+ 请求方式
    POST
+ 参数说明
参数名称|是否必须|说明
--|--|--
username|是|用户名
password|是|用户密码
+ 示例
```javascript
{"username":"zhoushugang","password","123456"}
```
+ 返回说明
参数|说明
--|--
success|注册状态
error|操作失败
+ 示例
```javascript
//success
{"success":true}
//error 同上个接口
```

### logout
+ 接口名称
  登出接口
+ 接口地址
  /user/logout
+ 请求方式
  GET
+ 参数说明
  无
+ 返回说明
参数|说明
--|--
success|注册状态
error|操作失败
+ 示例
```javascript
//success
{"success":true}
//error 同上个接口
```

### updatePassword
+ 接口名称
  修改密码
+ 接口地址
  /user/updatePassword
+ 请求方式
  POST
+ 参数说明
参数名称|是否必须|说明
--|--|--
oldPassword|是|用户密码
newPassword|是|用户密码
+ 示例

```javascript
{"oldPassword":"123456","newPassword":"456789"}
```
+ 返回说明
参数|说明
--|--
success|注册状态
error|操作失败
+ 示例
```javascript
//success
{"success":true}
//error 同上个接口
```

### 产品模块

### queryProduct
+ 接口名称
  搜索产品
+ 接口地址
  /product/queryProduct
+ 请求方式
  GET
+ 参数说明
参数名称|是否必须|说明
--|--|--
proName |否|产品名称
brandId |否|pin
price   |否|使用价格排序（1升序，2降序）
num     |否|产品库存排序（1升序，2降序）
page    |是|第几页
pageSize|是|每页的条数
+ 返回说明
参数|说明
--|--
+ 示例
```javascript
{
  "page": "1",
  "size": "3",
  "count": 4,
  "data": [
    {
      "id": 1,
      "proName": "羽绒服",
      "price": 600,
      "pic": "/pic/1.jpg",
      "num": 1
    },
    {
      "id": 2,
      "proName": "羽绒服",
      "price": 599,
      "pic": "非常厚实~~~漂漂亮亮~~~",
      "num": 2
    },
    {
      "id": 3,
      "proName": "羽绒服",
      "price": 499,
      "pic": "非常厚实~~~漂漂亮亮~~~",
      "num": 3
    }
  ]
}
```

### 产品详情 queryProductDetail
+ 接口地址

   /product/queryProductDetail

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
id |是|产品id

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{data}
```
### 分类模块
### 一级分类查询 queryTopCategory
+ 接口地址

   /category/queryTopCategory

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
[{data},{data}]
```
### 二级分类查询 querySecondCategory
+ 接口地址

   /category/querySecondCategory

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
id |是|一级分类id

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{data}
```
### 购物车
### 添加购物车 addCart
+ 接口地址

   /cart/addCart

+ 请求方式

  post
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
productId |是|产品id

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
[{data},{data}]
```
### 修改购物车 updateCart
+ 接口地址

   /cart/updateCart

+ 请求方式

  post
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
productId |是|产品id
size      |是|产品尺码
num      |是|产品数量

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```
### 修改购物车 updateCart
+ 接口地址

   /cart/updateCart

+ 请求方式

  post
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
cartId    |是|购物id
productId |是|产品id
size      |是|产品尺码
num       |是|产品数量

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```
### 删除购物车 deleteCart
+ 接口地址

   /cart/deleteCart

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
cartId    |是|购物id 数组

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```
### 查询购物车 queryCart
+ 接口地址

   /cart/queryCart

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
page  |是|页数
pageSize  |是|每页条数

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```
###收货地址

### 添加收货地址 addAddress

+ 接口地址

   /address/addAddress

+ 请求方式

  post
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
id  字段id 
userId  与user 表关联
address  三级联动地址
addressDetail  详细地址
isDelete 是否为默认地址  1 位默认地址.

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```
### 修改收货地址 updateAddress

+ 接口地址

   /address/updateAddress

+ 请求方式

  post
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
id  字段id 
userId  与user 表关联
address  三级联动地址
addressDetail  详细地址
isDelete 是否为默认地址  1 位默认地址.

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```

### 删除收货地址 deleteAddress

+ 接口地址

   /address/deleteAddress

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
id|是|地址id 

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
{"success":true}
```
### 查询收货地址 queryAddress

+ 接口地址

   /address/deleteAddress

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--
page|是|page 
pageSize|是|pageSize 

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
[{data},{data}]
```
### 查询收货地址 queryAddressTree

+ 接口地址

   /address/queryAddressTree

+ 请求方式

  get
    
+ 参数说明

参数名称|是否必须|说明
--|--|--

+ 返回说明

参数|说明
--|--
+ 示例

```javascript
[{data},{data}]
```
