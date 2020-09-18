
        const getCourses = () => {
            const existingCourses = sessionStorage.getItem('id');
            if (existingCourses) {
                return existingCourses; 
            } else {
                const newCourse = 'course-' + new Date().getTime();
                sessionStorage.setItem('id', newCourse)
                return newCourse;
            }
        }
        
        const getDataKey = () => {
            const id = getCourses();
            return `online-class/carts/${id}`
        }
        
        // push to local storage: a temporary place for database
        export const getDatabaseCart = () => {
            const dataKey = getDataKey();
            const data = localStorage.getItem(dataKey) || "{}";
            return JSON.parse(data);
        }
        
        export const addToDatabaseCart = (key, count) => {
            const currentCart = getDatabaseCart();
            currentCart[key] = count;
            localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
        }
        
        export const removeFromDatabaseCart = key => {
            const currentCart = getDatabaseCart();
            delete currentCart[key];
            localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
        }
        
        export const processOrder = (cart) => {
            localStorage.removeItem(getDataKey());
        }
    
            
