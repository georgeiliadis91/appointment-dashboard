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
12. Add loading to some global redux state so its controllable from one point. -Done
13. Fix useEffect trycatch methods, to catch async error - Done
14. Fix main file imports - Done
15. Check if localstorageExists \*\* - Done
16. Fix any inside allyProps - Done
17. Fix arrow branching udner weekCaledar - Done
18. Change variable of useParam to const instead of let - Done
19. Create hook for alert Dispatching -Done
20. Jwt tokens - In progress bug with undefined token exists.

========PENDINGS =============

<!-- POSSIBLE ADDITIONS -->

4. GraphQl - ?? will i really use graphql that is the question? \*\*
5. Install and configure Apollo \*\*
6. UseGenerator \*\*

7. Create UI component import point of entry - in progress
8. Create Stats Dashboard
9. Encrpypt Database - Encrypt string.
10. Forgot Password flow
11. Forgot Password gui
12. Implement DND for month
13. Implement DND for day
14. Make Day/Week/Month draggable to have slots where the item "sticks"
15. Check style on tables, content must be <= that the headers.
16. Create Token verifycation to check if authed
17. Rewrite the storage functions that if localStorage isnt supported, that i defaults to cookiestorage
18. Remove material table and add custom table Components.
19. Fix style imports
20. Replace material-table with the custom table components made.
21. Move things to custom hooks and map the pagination properly
22. Currently the search is a broken filter connect it to the backent.
23. Fix pagination to work.

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
