# EmailJS Configuration Instructions

**Document prepared for:** Roberto (IT Department)  
**Project:** Industrial Supply Network  
**Date:** 2024

---

## Overview

This document provides step-by-step instructions for configuring EmailJS to handle contact form submissions on the Industrial Supply Network website. Once configured, all form submissions will be automatically forwarded to your designated email address.

---

## Prerequisites

1. An EmailJS account (sign up at https://www.emailjs.com if you don't have one)
2. Access to the email account where you want to receive form submissions
3. The email address you want to use (e.g., `sales@industrialsupply-us.com` or another address)

---

## Step 1: Create an Email Service in EmailJS

1. **Log in to EmailJS Dashboard**
   - Go to https://dashboard.emailjs.com
   - Sign in to your account (or create one if needed)

2. **Add Email Service**
   - Navigate to **"Email Services"** in the left sidebar
   - Click **"Add New Service"**
   - Select your email provider:
     - **Gmail** (recommended if using Gmail/Google Workspace)
     - **Outlook** (if using Outlook/Microsoft 365)
     - **Custom SMTP** (for other providers)
   
3. **Configure the Service**
   - **Service Name:** `industrial_supply_service` (or any name you prefer)
   - **Email Account:** Enter the email address where you want to receive form submissions
     - Example: `sales@industrialsupply-us.com`
   - Follow the provider-specific authentication steps:
     - **For Gmail:** You'll need to enable "Less secure app access" or use an App Password
     - **For Outlook:** Use OAuth authentication
     - **For Custom SMTP:** Enter your SMTP server details

4. **Save the Service**
   - Click **"Create Service"**
   - **IMPORTANT:** Copy and save the **Service ID** (you'll need to provide this to us)

---

## Step 2: Create an Email Template

1. **Navigate to Email Templates**
   - Go to **"Email Templates"** in the left sidebar
   - Click **"Create New Template"**

2. **Configure the Template**
   - **Template Name:** `industrial_supply_contact_form` (or any name you prefer)
   - **Subject:** `New Contact Form Submission - Industrial Supply Network`
   - **Content:** Use the following template:

   ```
   New contact form submission received:
   
   Name: {{name}}
   Email: {{email_contact}}
   Phone: {{phone_contact}}
   
   ---
   This email was sent from the Industrial Supply Network contact form.
   ```

3. **Template Settings**
   - **To Email:** Select your service email address (the one you configured in Step 1)
   - **From Name:** `Industrial Supply Network Website`
   - **Reply To:** `{{email_contact}}` (this allows you to reply directly to the person who submitted the form)

4. **Save the Template**
   - Click **"Save"**
   - **IMPORTANT:** Copy and save the **Template ID** (you'll need to provide this to us)

---

## Step 3: Get Your Public Key

1. **Navigate to Account Settings**
   - Click on your profile/account icon (top right)
   - Go to **"General"** or **"Account"**

2. **Find Your Public Key**
   - Look for **"Public Key"** or **"API Keys"**
   - Copy the **Public Key** (starts with letters/numbers, e.g., `RpK5TowBV0ICJanq6`)
   - **IMPORTANT:** Save this key securely

---

## Step 4: Provide Information to Development Team

Please provide the following information to complete the integration:

### Required Information:

1. **Service ID**
   - Format: `service_xxxxxxx` or similar
   - Location: Email Services → Your Service → Service ID

2. **Template ID**
   - Format: `template_xxxxxxx` or similar
   - Location: Email Templates → Your Template → Template ID

3. **Public Key**
   - Format: Alphanumeric string (e.g., `RpK5TowBV0ICJanq6`)
   - Location: Account Settings → Public Key

4. **Email Address** (for verification)
   - The email address where form submissions will be sent
   - Example: `sales@industrialsupply-us.com`

---

## Step 5: Testing

After we integrate the provided information, please test the contact form:

1. Go to the contact page on the website
2. Fill out the form with test data:
   - Name: Test User
   - Email: your-test-email@example.com
   - Phone: +1-555-123-4567
3. Submit the form
4. Check the configured email inbox for the test submission
5. Verify that:
   - The email was received
   - All form fields are correctly displayed
   - The "Reply To" field works (you can reply directly to the submitter)

---

## Current Configuration (For Reference)

**Note:** The following configuration is currently in the code but needs to be updated with your new EmailJS setup:

- **Service ID:** `hrk_global_service_mail` (needs to be replaced)
- **Template ID:** `hrk_template_email` (needs to be replaced)
- **Public Key:** `RpK5TowBV0ICJanq6` (needs to be replaced)

---

## Security Notes

1. **Public Key:** The public key is safe to use in frontend code (it's designed to be public)
2. **Service ID & Template ID:** These are also safe to use in frontend code
3. **Email Credentials:** Never share your email account password. EmailJS handles authentication securely through OAuth or App Passwords

---

## Troubleshooting

### Email Not Received
- Check spam/junk folder
- Verify the email address in the service configuration
- Check EmailJS dashboard for error logs
- Verify the template "To Email" field is correct

### Authentication Errors
- **Gmail:** Ensure "Less secure app access" is enabled or use an App Password
- **Outlook:** Complete OAuth authentication flow
- **Custom SMTP:** Verify SMTP server settings and credentials

### Form Not Submitting
- Check browser console for JavaScript errors
- Verify all three IDs (Service, Template, Public Key) are correct
- Ensure EmailJS account is active and not over quota

---

## Support

If you encounter any issues during setup:

1. Check EmailJS documentation: https://www.emailjs.com/docs/
2. Contact EmailJS support: support@emailjs.com
3. Provide the following information when requesting help:
   - Service ID
   - Template ID
   - Error messages (if any)
   - Screenshots of the configuration

---

## Next Steps

Once you have completed the setup and have the three required pieces of information (Service ID, Template ID, and Public Key), please send them to the development team so we can update the website configuration.

**Contact Information:**
- Please send the configuration details via email or your preferred communication channel

---

**Document Version:** 1.0  
**Last Updated:** 2024

