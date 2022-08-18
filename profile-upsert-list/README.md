The following is required for your assignment to be graded:

PR open from profile-upsert-list to dev
PR Passes CI (lint)
PR preview on netlify
Commit with…	20
Planning artifacts	2
Create Profile functionality	6
Update Profile functionality	4
Display all users	6
New Navigation	

## planning
You will need a profile name and profile bio
upadte on click button.
what dom events/events are gonna take place
The user name
the user bio
an update button to update info



Profile Upsert & List
For this “feature ticket” assignment, you need to add a profile update page and a list of user profiles page.

Create a new branch from dev called profile-upsert-list

Planning
Sketch out what each page will look like. On your diagram, identify:

What are the pieces of data required? (down to the field/column level)
What actions take place on the page? (usually means DOM events + page load)
Take a screen shot and include in your repo

Page & UI
These pages should be “protected”, meaning you need to be logged in to see them.

You can start on either page:

page	navigation	purpose
/users	Users	show all user profiles in a list format
/profile	My Profile	edits the currently logged in user’s profile
New Navigation
Add new navigation options on other pages using the labels specified above:

No nav on /auth page
No self-link on pages (meaning /users should not have link for Users)
Users
Though the page is called “users” this is a display of data from the profiles table. If you start with this page, put some data in the table when needed, but be aware that the user id’s need to match signed up users. See below for schema and policy info for this table.

Profile
A form for the user to add or edit their profile.

Since we know a user can have one and only one profile row, we can use supabase upsert to either insert or update the row. Because of our policy and row default value for that tables id column, we don’t have to explicitly add a WHERE criteria (eq or match)