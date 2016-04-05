#!/bin/env node
'use strict';

//  OpenShift sample Node application
var app = require('./dist/app');
var fs = require('fs');

/**
 *  Define the sample application.
 */
var OpenShiftApp = function OpenShiftApp() {

    //  Scope.
    var self = this;

    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server IP address and port # using env variables/defaults.
     */
    self.setupVariables = function () {
        //  Set the environment variables we need.
        self.ipaddress = process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP;
        self.port = process.env.OPENSHIFT_NODEJS_PORT || process.env.OPENSHIFT_INTERNAL_PORT || 8080;

        if (typeof self.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_*_IP var, using 127.0.0.1');
            self.ipaddress = "127.0.0.1";
        };
    };

    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function (sig) {
        if (typeof sig === "string") {
            console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
            process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()));
    };

    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function () {
        //  Process on exit and signals.
        process.on('exit', function () {
            self.terminator();
        });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT', 'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'].forEach(function (element, index, array) {
            process.on(element, function () {
                self.terminator(element);
            });
        });
    };

    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function () {
        //self.createRoutes();
        self.app = app;
    };

    /**
     *  Initializes the sample application.
     */
    self.initialize = function () {
        self.setupVariables();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };

    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function () {
        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function () {
            console.log('%s: Node server started on %s:%d ...', Date(Date.now()), self.ipaddress, self.port);
        });
    };
}; /*  Sample Application.  */

/**
 *  main():  Main code.
 */
var zapp = new OpenShiftApp();
zapp.initialize();
zapp.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxJQUFJLE1BQU0sUUFBUSxPQUFSLENBQU47QUFDSixJQUFJLEtBQUssUUFBUSxJQUFSLENBQUw7Ozs7O0FBTUosSUFBSSxlQUFlLFNBQWYsWUFBZSxHQUFXOzs7QUFHMUIsUUFBSSxPQUFPLElBQVA7Ozs7Ozs7OztBQUhzQixRQWExQixDQUFLLGNBQUwsR0FBc0IsWUFBVzs7QUFFN0IsYUFBSyxTQUFMLEdBQWlCLFFBQVEsR0FBUixDQUFZLG1CQUFaLElBQ2IsUUFBUSxHQUFSLENBQVkscUJBQVosQ0FIeUI7QUFJN0IsYUFBSyxJQUFMLEdBQVksUUFBUSxHQUFSLENBQVkscUJBQVosSUFDUixRQUFRLEdBQVIsQ0FBWSx1QkFBWixJQUF1QyxJQUQvQixDQUppQjs7QUFPN0IsWUFBSSxPQUFPLEtBQUssU0FBTCxLQUFtQixXQUExQixFQUF1Qzs7O0FBR3ZDLG9CQUFRLElBQVIsQ0FBYSx3Q0FBYixFQUh1QztBQUl2QyxpQkFBSyxTQUFMLEdBQWlCLFdBQWpCLENBSnVDO1NBQTNDLENBUDZCO0tBQVg7Ozs7Ozs7QUFiSSxRQWlDMUIsQ0FBSyxVQUFMLEdBQWtCLFVBQVMsR0FBVCxFQUFjO0FBQzVCLFlBQUksT0FBTyxHQUFQLEtBQWUsUUFBZixFQUF5QjtBQUN6QixvQkFBUSxHQUFSLENBQVksOENBQVosRUFDSSxLQUFLLEtBQUssR0FBTCxFQUFMLENBREosRUFDc0IsR0FEdEIsRUFEeUI7QUFHekIsb0JBQVEsSUFBUixDQUFhLENBQWIsRUFIeUI7U0FBN0I7QUFLQSxnQkFBUSxHQUFSLENBQVksMEJBQVosRUFBd0MsS0FBSyxLQUFLLEdBQUwsRUFBTCxDQUF4QyxFQU40QjtLQUFkOzs7OztBQWpDUSxRQThDMUIsQ0FBSyx3QkFBTCxHQUFnQyxZQUFXOztBQUV2QyxnQkFBUSxFQUFSLENBQVcsTUFBWCxFQUFtQixZQUFXO0FBQzFCLGlCQUFLLFVBQUwsR0FEMEI7U0FBWCxDQUFuQjs7O0FBRnVDLFNBT3RDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLEVBQWdDLFFBQWhDLEVBQTBDLFNBQTFDLEVBQXFELFNBQXJELEVBQ0ksUUFESixFQUNjLFFBRGQsRUFDd0IsU0FEeEIsRUFDbUMsU0FEbkMsRUFDOEMsU0FEOUMsRUFDeUQsU0FEekQsRUFFRSxPQUZGLENBRVUsVUFBUyxPQUFULEVBQWtCLEtBQWxCLEVBQXlCLEtBQXpCLEVBQWdDO0FBQ3RDLG9CQUFRLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQVc7QUFDM0IscUJBQUssVUFBTCxDQUFnQixPQUFoQixFQUQyQjthQUFYLENBQXBCLENBRHNDO1NBQWhDLENBRlYsQ0FQdUM7S0FBWDs7Ozs7Ozs7OztBQTlDTixRQXVFMUIsQ0FBSyxnQkFBTCxHQUF3QixZQUFXOztBQUUvQixhQUFLLEdBQUwsR0FBVyxHQUFYLENBRitCO0tBQVg7Ozs7O0FBdkVFLFFBZ0YxQixDQUFLLFVBQUwsR0FBa0IsWUFBVztBQUN6QixhQUFLLGNBQUwsR0FEeUI7QUFFekIsYUFBSyx3QkFBTDs7O0FBRnlCLFlBS3pCLENBQUssZ0JBQUwsR0FMeUI7S0FBWDs7Ozs7QUFoRlEsUUE0RjFCLENBQUssS0FBTCxHQUFhLFlBQVc7O0FBRXBCLGFBQUssR0FBTCxDQUFTLE1BQVQsQ0FBZ0IsS0FBSyxJQUFMLEVBQVcsS0FBSyxTQUFMLEVBQWdCLFlBQVc7QUFDbEQsb0JBQVEsR0FBUixDQUFZLHNDQUFaLEVBQ0ksS0FBSyxLQUFLLEdBQUwsRUFBTCxDQURKLEVBQ3NCLEtBQUssU0FBTCxFQUFnQixLQUFLLElBQUwsQ0FEdEMsQ0FEa0Q7U0FBWCxDQUEzQyxDQUZvQjtLQUFYLENBNUZhO0NBQVg7Ozs7O0FBMkduQixJQUFJLE9BQU8sSUFBSSxZQUFKLEVBQVA7QUFDSixLQUFLLFVBQUw7QUFDQSxLQUFLLEtBQUwiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gLy8gIE9wZW5TaGlmdCBzYW1wbGUgTm9kZSBhcHBsaWNhdGlvblxudmFyIGFwcCA9IHJlcXVpcmUoJy4vYXBwJyk7XG52YXIgZnMgPSByZXF1aXJlKCdmcycpO1xuXG5cbi8qKlxuICogIERlZmluZSB0aGUgc2FtcGxlIGFwcGxpY2F0aW9uLlxuICovXG52YXIgT3BlblNoaWZ0QXBwID0gZnVuY3Rpb24oKSB7XG5cbiAgICAvLyAgU2NvcGUuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG5cbiAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cbiAgICAvKiAgSGVscGVyIGZ1bmN0aW9ucy4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAvKiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAgKi9cblxuICAgIC8qKlxuICAgICAqICBTZXQgdXAgc2VydmVyIElQIGFkZHJlc3MgYW5kIHBvcnQgIyB1c2luZyBlbnYgdmFyaWFibGVzL2RlZmF1bHRzLlxuICAgICAqL1xuICAgIHNlbGYuc2V0dXBWYXJpYWJsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gIFNldCB0aGUgZW52aXJvbm1lbnQgdmFyaWFibGVzIHdlIG5lZWQuXG4gICAgICAgIHNlbGYuaXBhZGRyZXNzID0gcHJvY2Vzcy5lbnYuT1BFTlNISUZUX05PREVKU19JUCB8fFxuICAgICAgICAgICAgcHJvY2Vzcy5lbnYuT1BFTlNISUZUX0lOVEVSTkFMX0lQO1xuICAgICAgICBzZWxmLnBvcnQgPSBwcm9jZXNzLmVudi5PUEVOU0hJRlRfTk9ERUpTX1BPUlQgfHxcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Lk9QRU5TSElGVF9JTlRFUk5BTF9QT1JUIHx8IDgwODA7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmlwYWRkcmVzcyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy8gIExvZyBlcnJvcnMgb24gT3BlblNoaWZ0IGJ1dCBjb250aW51ZSB3LyAxMjcuMC4wLjEgLSB0aGlzXG4gICAgICAgICAgICAvLyAgYWxsb3dzIHVzIHRvIHJ1bi90ZXN0IHRoZSBhcHAgbG9jYWxseS5cbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTm8gT1BFTlNISUZUXypfSVAgdmFyLCB1c2luZyAxMjcuMC4wLjEnKTtcbiAgICAgICAgICAgIHNlbGYuaXBhZGRyZXNzID0gXCIxMjcuMC4wLjFcIjtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogIHRlcm1pbmF0b3IgPT09IHRoZSB0ZXJtaW5hdGlvbiBoYW5kbGVyXG4gICAgICogIFRlcm1pbmF0ZSBzZXJ2ZXIgb24gcmVjZWlwdCBvZiB0aGUgc3BlY2lmaWVkIHNpZ25hbC5cbiAgICAgKiAgQHBhcmFtIHtzdHJpbmd9IHNpZyAgU2lnbmFsIHRvIHRlcm1pbmF0ZSBvbi5cbiAgICAgKi9cbiAgICBzZWxmLnRlcm1pbmF0b3IgPSBmdW5jdGlvbihzaWcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzaWcgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCclczogUmVjZWl2ZWQgJXMgLSB0ZXJtaW5hdGluZyBzYW1wbGUgYXBwIC4uLicsXG4gICAgICAgICAgICAgICAgRGF0ZShEYXRlLm5vdygpKSwgc2lnKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZygnJXM6IE5vZGUgc2VydmVyIHN0b3BwZWQuJywgRGF0ZShEYXRlLm5vdygpKSk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogIFNldHVwIHRlcm1pbmF0aW9uIGhhbmRsZXJzIChmb3IgZXhpdCBhbmQgYSBsaXN0IG9mIHNpZ25hbHMpLlxuICAgICAqL1xuICAgIHNlbGYuc2V0dXBUZXJtaW5hdGlvbkhhbmRsZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICBQcm9jZXNzIG9uIGV4aXQgYW5kIHNpZ25hbHMuXG4gICAgICAgIHByb2Nlc3Mub24oJ2V4aXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYudGVybWluYXRvcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZW1vdmVkICdTSUdQSVBFJyBmcm9tIHRoZSBsaXN0IC0gYnVneiA4NTI1OTguXG4gICAgICAgIFsnU0lHSFVQJywgJ1NJR0lOVCcsICdTSUdRVUlUJywgJ1NJR0lMTCcsICdTSUdUUkFQJywgJ1NJR0FCUlQnLFxuICAgICAgICAgICAgJ1NJR0JVUycsICdTSUdGUEUnLCAnU0lHVVNSMScsICdTSUdTRUdWJywgJ1NJR1VTUjInLCAnU0lHVEVSTSdcbiAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQsIGluZGV4LCBhcnJheSkge1xuICAgICAgICAgICAgcHJvY2Vzcy5vbihlbGVtZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRlcm1pbmF0b3IoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXG4gICAgLyogIEFwcCBzZXJ2ZXIgZnVuY3Rpb25zIChtYWluIGFwcCBsb2dpYyBoZXJlKS4gICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgLyogID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gICovXG5cbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGl6ZSB0aGUgc2VydmVyIChleHByZXNzKSBhbmQgY3JlYXRlIHRoZSByb3V0ZXMgYW5kIHJlZ2lzdGVyXG4gICAgICogIHRoZSBoYW5kbGVycy5cbiAgICAgKi9cbiAgICBzZWxmLmluaXRpYWxpemVTZXJ2ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy9zZWxmLmNyZWF0ZVJvdXRlcygpO1xuICAgICAgICBzZWxmLmFwcCA9IGFwcDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiAgSW5pdGlhbGl6ZXMgdGhlIHNhbXBsZSBhcHBsaWNhdGlvbi5cbiAgICAgKi9cbiAgICBzZWxmLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5zZXR1cFZhcmlhYmxlcygpO1xuICAgICAgICBzZWxmLnNldHVwVGVybWluYXRpb25IYW5kbGVycygpO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgZXhwcmVzcyBzZXJ2ZXIgYW5kIHJvdXRlcy5cbiAgICAgICAgc2VsZi5pbml0aWFsaXplU2VydmVyKCk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogIFN0YXJ0IHRoZSBzZXJ2ZXIgKHN0YXJ0cyB1cCB0aGUgc2FtcGxlIGFwcGxpY2F0aW9uKS5cbiAgICAgKi9cbiAgICBzZWxmLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICBTdGFydCB0aGUgYXBwIG9uIHRoZSBzcGVjaWZpYyBpbnRlcmZhY2UgKGFuZCBwb3J0KS5cbiAgICAgICAgc2VsZi5hcHAubGlzdGVuKHNlbGYucG9ydCwgc2VsZi5pcGFkZHJlc3MsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJyVzOiBOb2RlIHNlcnZlciBzdGFydGVkIG9uICVzOiVkIC4uLicsXG4gICAgICAgICAgICAgICAgRGF0ZShEYXRlLm5vdygpKSwgc2VsZi5pcGFkZHJlc3MsIHNlbGYucG9ydCk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbn07IC8qICBTYW1wbGUgQXBwbGljYXRpb24uICAqL1xuXG5cblxuLyoqXG4gKiAgbWFpbigpOiAgTWFpbiBjb2RlLlxuICovXG52YXIgemFwcCA9IG5ldyBPcGVuU2hpZnRBcHAoKTtcbnphcHAuaW5pdGlhbGl6ZSgpO1xuemFwcC5zdGFydCgpOyJdfQ==
