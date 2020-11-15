###

=========DONE========

1. Create Cookie Storage - Done
2. Create Error Handler - Done
3. Create Api Services - Done
4. Loading Component - Done
5. Create Login gui - Done
6. Import react Beautifll Dnd - Done
7. Find date lib - Done
8. Implement DND for week - Done
9. Protected Routing and mapping - Done
10. Redux and reducers - Done
11. Create Visit History - Done

========PENDINGS =============

3. Jwt tokens
4. GraphQl  - ?? will i really use graphql that is the question?
5. Install and configure Apollo **
6. UseGenerator **
7. Create UI component import point of entry - in progress
9. Create Stats Dashboard
10. Encrpypt Database - Encrypt string.
11. Forgot Password flow
12. Forgot Password gui
13. Implement DND for month
14. Implement DND for day
15. Make Day/Week/Month draggable to have slots where the item "sticks"
16. Check style on tables, content must be <= that the headers.
17. Create Token verifycation to check if authed
18. Rewrite the storage functions that if localStorage isnt supported, that i defaults to cookiestorage

======== CODE IMPROVEMENTS ==============

1. Fix useEffect trycatch methods, to catch async error - Done
2. Fix main file imports - Done
3. Create hook for alert Dispatching
4. Check if localstorageExists \*\* - Done
5. Fix any inside allyProps - Done
6. Fix arrow branching udner weekCaledar - Done
7. Change variable of useParam to const instead of let - Done

** Example smippet 1 **

snippet:
const isSupported = (() => {
if(!'localStorage' in window) {
return false;
}

try {
const key = '_ls_test_';

    localStorage.setItem(key, key)
    localStorage.getItem(key)
    localStorage.removeItem(key)

    return true

} catch {
return false
}
})()
