

class ElementUtils {

    async enterText(element, val, description) {
        try {
            element.type(val);
        } catch(error) {
            throw error;
        }
    }

}

module.exports = ElementUtils;