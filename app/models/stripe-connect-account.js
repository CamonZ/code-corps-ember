import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  bankAccountStatus: attr(),
  bankAccountBankName: attr(),
  bankAccountLast4: attr(),
  bankAccountRoutingNumber: attr(),
  businessName: attr(),
  businessUrl: attr(),
  canAcceptDonations: attr(),
  chargesEnabled: attr(),
  country: attr(),
  defaultCurrency: attr(),
  detailsSubmitted: attr(),
  displayName: attr(),
  email: attr(),
  externalAccount: attr(),
  insertedAt: attr(),
  legalEntityAddressCity: attr(),
  legalEntityAddressCountry: attr(),
  legalEntityAddressLine1: attr(),
  legalEntityAddressLine2: attr(),
  legalEntityAddressPostalCode: attr(),
  legalEntityAddressState: attr(),
  legalEntityBusinessName: attr(),
  legalEntityBusinessTaxId: attr(),
  legalEntityBusinessTaxIdProvided: attr(),
  legalEntityBusinessVatId: attr(),
  legalEntityBusinessVatIdProvided: attr(),
  legalEntityDobDay: attr('number'),
  legalEntityDobMonth: attr('number'),
  legalEntityDobYear: attr('number'),
  legalEntityFirstName: attr(),
  legalEntityLastName: attr(),
  legalEntityGender: attr(),
  legalEntityMaidenName: attr(),
  legalEntityPersonalAddressCity: attr(),
  legalEntityPersonalAddressCountry: attr(),
  legalEntityPersonalAddressLine1: attr(),
  legalEntityPersonalAddressLine2: attr(),
  legalEntityPersonalAddressPostalCode: attr(),
  legalEntityPersonalAddressState: attr(),
  legalEntityPhoneNumber: attr(),
  legalEntityPersonalIdNumber: attr(),
  legalEntityPersonalIdNumberProvided: attr(),
  legalEntitySsnLast4: attr(),
  legalEntitySsnLast4Provided: attr(),
  legalEntityType: attr(),
  legalEntityVerificationDetails: attr(),
  legalEntityVerificationDetailsCode: attr(),
  legalEntityVerificationDocument: attr(),
  legalEntityVerificationStatus: attr(),
  idFromStripe: attr(),
  managed: attr(),
  personalIdNumberStatus: attr(),
  recipientStatus: attr(),
  supportEmail: attr(),
  supportPhone: attr(),
  supportUrl: attr(),
  tosAcceptanceDate: attr(),
  transfersEnabled: attr(),
  updatedAt: attr(),
  verificationDisabledReason: attr(),
  verificationDocumentStatus: attr(),
  verificationDueBy: attr(),
  verificationFieldsNeeded: attr(),

  organization: belongsTo('organization', { async: true })
});
