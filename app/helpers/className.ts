type ObjectClasses = {[key: string]: boolean}


/**
 * className : Use class like Vue JS
 * ? string : 'class1 class2 ...'
 * ? {[key: string]: boolean} : { 'class1': true, ... }
 * ? ({[key: string]: boolean} | string)[] : ['class1 class2', 'class3', { 'class3': true, ... }, ...]
 * @param {string | ObjectClasses | (ObjectClasses | string)[]} classes
 * @return {string} 
 */
export const className = (classes: string | ObjectClasses | (ObjectClasses | string)[]): string => {
    if (Array.isArray(classes)) {
        const list: string[] = []
        classes.forEach(
            (classGroup: string | ObjectClasses) => 
                (typeof classGroup === 'object') ? list.push(classesFromObject(classGroup)) : list.push(classGroup)
        , [])
        return list.join(' ')
    } else if (typeof classes === 'object') {
        return classesFromObject(classes)
    }
    return classes
}

/**
 * Format object class to string
 * @param {ObjectClasses} 
 * @returns {string}
 */
const classesFromObject = (classes: ObjectClasses): string => Object.entries(classes)
    .filter((entry) => entry[1])
    .map((entry) => entry[0])
    .join(" ")

/**
 * Alias of className
 * @param {string | ObjectClasses | (ObjectClasses | string)[]} classes
 * @return {string} 
 */
export const vClass = className
