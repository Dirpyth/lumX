import moment from 'moment';

/////////////////////////////

function DemoDatePickerController(LxDatePickerService) {
    'ngInject';

    const vm = this;

    /////////////////////////////
    //                         //
    //    Public attributes    //
    //                         //
    /////////////////////////////

    /**
     * The date picker demo models.
     *
     * @type {Object}
     */
    vm.datePicker = {
        default: {
            date: new Date(),
            dateFormatted: moment().format('LL'),
            // eslint-disable-next-line no-magic-numbers
            minDate: new Date(new Date().getFullYear(), new Date().getMonth() - 2, new Date().getDate()),
            // eslint-disable-next-line no-magic-numbers
            maxDate: new Date(new Date().getFullYear(), new Date().getMonth() + 2, new Date().getDate()),
        },
        textField: {
            date: new Date(),
            dateFormatted: moment().format('LL'),
        },
    };

    /**
     * The date picker demo identifier.
     *
     * @type {string}
     */
    vm.datePickerId = 'date-picker';

    /////////////////////////////
    //                         //
    //     Public functions    //
    //                         //
    /////////////////////////////

    /**
     * Update model on date select.
     *
     * @param {Object} newdate The new date.
     */
    function datePickerCallback(newdate) {
        vm.datePicker.default.date = newdate;
        vm.datePicker.default.dateFormatted = moment(newdate).format('LL');
    }

    /**
     * Open date picker.
     *
     * @param {string} datePickerId The date picker identifier.
     */
    function openDatePicker(datePickerId) {
        LxDatePickerService.open(datePickerId);
    }

    /////////////////////////////

    vm.datePickerCallback = datePickerCallback;
    vm.openDatePicker = openDatePicker;
}

/////////////////////////////

angular.module('lumx-demo').controller('DemoDatePickerController', DemoDatePickerController);

/////////////////////////////

export { DemoDatePickerController };
