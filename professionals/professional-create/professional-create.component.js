"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var professional_service_1 = require("../../shared/services/professional.service");
var ProfessionalCreateComponent = (function () {
    function ProfessionalCreateComponent(router, service) {
        this.router = router;
        this.service = service;
        this.professional = { fileNumber: '', yearsTaught: '', awards: '', registrationNumber: '', currentPosting: '', currentPosition: '', teachingHistory: '', educationHistory: '' };
        this.errorMessage = '';
        this.successMessage = '';
    }
    ProfessionalCreateComponent.prototype.ngOnInit = function () {
    };
    ProfessionalCreateComponent.prototype.createProfessional = function () {
        var _this = this;
        this.successMessage = '';
        this.errorMessage = '';
        this.service.createProfessional(this.professional)
            .subscribe(function (teacher) {
            _this.successMessage = 'Teacher profile was created';
            _this.router.navigate(['/professionals']);
            console.log('Profile created');
        });
    };
    ProfessionalCreateComponent = __decorate([
        core_1.Component({
            templateUrl: './app/professionals/professional-create/professional-create.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, professional_service_1.ProfessionalService])
    ], ProfessionalCreateComponent);
    return ProfessionalCreateComponent;
}());
exports.ProfessionalCreateComponent = ProfessionalCreateComponent;
//# sourceMappingURL=professional-create.component.js.map