
# Coupon Distributor - Frontend

This is the frontend of the Round-Robin Coupon Distribution system, built using React. It provides an admin panel to manage coupons, track claims, and control coupon availability.     
   



## For the Guest Users

**You can access:**  
- **Home Tab**  
- **Coupons Tab**  

### Home Tab  
Provides a precise description of the functionality of the website.  

### Coupons Tab  
Here, guest users can claim coupons. Click on the **Claim Coupon** button to claim a coupon.  

- On successful coupon claim, a **guest cookie** will be generated so you can claim another coupon after a **cooldown period of 10 minutes**.  
- You can make **10 request calls per 5 minutes**. If you exhaust your limit, you will see this message:  
  **"Too many requests, please try again later."**  
- If no coupons are available, you will see this message:  
  **"No coupons available at the moment. Try again later!"**  

#### ⚠️ Note:  
You can access the **Admin Login Page**, but you **cannot log in** without valid credentials.  


 ## For the Admin User

**You can access:**  
- **Home Tab**  
- **Coupons Tab**  
- **Admin Tab**  

### Home Tab  
Provides a precise description of the functionality of the website.  

### Coupons Tab  
You can also access the Coupons tab just as the guest users.  

### Admin Tab  
Login with your username and password.  

On successful login, you will be redirected to the **Admin Dashboard**.  

If not, you will see an error message based on your invalid input credentials.  

---

## Admin Dashboard  

### Add New Coupon Section  
Write your coupon name and click the **Add** button to add a new coupon.  

### All Coupons Section  
First, there are three buttons:  
- **Enable All** - Enables all the current coupons.  
- **Disable All** - Disables all the current coupons.  
- **Remove All** - Removes all coupons from the database.  

Next is the table for status and customization of each coupon:  
- **Coupon Code** - Displays the coupon name.  
- **Status** - Shows whether the coupon is Available or Claimed.  
- **Actions** - You can enable or disable a coupon from here.  
- **Remove** - You can remove a coupon from here.  
- **Edit** - You can edit the coupon name from here.  

### User Claim History Section  
Here, you can see the **Guest ID** or the **IP ID** of the users who have claimed the coupons.  
## **Admin Dashboard - Preloaded Data**  

When you first access the **Admin Dashboard**, it is pre-filled with:  
- **10 coupons** already added.  
- **2 coupons** already claimed by a guest user.  

This setup allows the admin to:  
- Test enabling, disabling, and removing coupons.  
- Monitor how claimed coupons appear in the **User Claim History Section**.  
- Ensure the system is functioning correctly before adding new coupons.  

**🔹 Note:** If you don't see the preloaded data as described, it means that either **guest users have claimed more coupons** or the **admin has modified the data**.

## Fontend Deployed Link  

[Coupon Distributor](https://coupon-distributor-eta.vercel.app/)
## Authors

- [@fieryprofessor](https://www.github.com/fieryprofessor)

