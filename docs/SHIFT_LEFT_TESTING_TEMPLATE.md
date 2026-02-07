# Shift Left Testing Template untuk QA

## Definisi Shift Left Testing

**Shift Left Testing** adalah strategi QA yang melibatkan tim testing lebih awal dalam software development lifecycle (SDLC), sebelum development phase benar-benar selesai. Tujuannya adalah:

- Mendeteksi bugs lebih awal
- Mengurangi rework dan biaya development
- Meningkatkan kualitas produk
- Mempercepat time-to-market
- Kolaborasi tim yang lebih baik

---

## Fase Shift Left Testing

### Phase 0: Requirements Analysis & Planning (Pre-Development)

#### Aktivitas QA:
1. **Requirements Review**
   - Review user stories dan acceptance criteria
   - Identify gaps dan ambiguities
   - Document test scenarios dan edge cases
   - Create test matrix

2. **Risk Assessment**
   - Analyze high-risk features
   - Prioritize testing efforts
   - Identify dependencies
   - Plan resource allocation

3. **Test Planning**
   - Create test strategy document
   - Define test scope dan out-of-scope items
   - Plan automation vs manual testing
   - Allocate testers by skill level

#### Template Requirement Review Checklist:
```
Project: ___________________
Date: ___________________
Reviewer: ___________________

REQUIREMENT DETAILS
- [ ] Requirement jelas dan terukur (SMART)
- [ ] Acceptance criteria terdefinisi dengan baik
- [ ] Dependency teridentifikasi
- [ ] Edge cases dipertimbangkan
- [ ] Performance requirement jelas
- [ ] Security requirement teridentifikasi
- [ ] Compatibility matrix defined

TESTING IMPLICATIONS
- [ ] Test scenarios dapat didefinisikan
- [ ] Automation feasibility assessed
- [ ] Resource & timeline reasonable
- [ ] Data preparation plan exists
- [ ] Environment requirements clear

RISKS & DEPENDENCIES
- [ ] Backend ready timeline: ___________
- [ ] Frontend ready timeline: ___________
- [ ] Third-party integrations: ___________
- [ ] Known risks: ___________
- [ ] Mitigation plan: ___________

SIGN-OFF
QA Lead: _____________ Date: _______
Dev Lead: _____________ Date: _______
```

---

### Phase 1: Design Review & Test Case Creation (Early Development)

#### Aktivitas QA:
1. **Design Review**
   - Review technical design document
   - Identify testability issues
   - Check consistency dengan requirements
   - Plan component-level testing

2. **Early Test Case Design**
   - Create detailed test cases (belum executable)
   - Define test data requirements
   - Identify automation opportunities
   - Plan negative test scenarios

3. **Test Environment Preparation**
   - Setup test infrastructure
   - Prepare mock/stub services
   - Create test data generation scripts
   - Setup monitoring & logging

#### Template Early Test Case Design:
```
TEST CASE ID: TC_001
Feature: [Feature Name]
Component: [Frontend/Backend/Integration]

SCENARIO: [User Story/Requirement]

PREREQUISITES:
- System state: ___________
- User permissions: ___________
- Test data: ___________

STEPS:
1. [Action/Input]
   Expected: [Expected Result]
   
2. [Action/Input]
   Expected: [Expected Result]

PASS CRITERIA:
- [ ] All steps executed successfully
- [ ] Error messages appropriate
- [ ] Data persisted correctly

AUTOMATION READINESS: [ ] Ready  [ ] Partial  [ ] Not Ready
REASON: ___________

BACKEND DEPENDENCY: ___________
FRONTEND DEPENDENCY: ___________

MOCK/STUB REQUIRED: [ ] Yes [ ] No
MOCK DETAILS: ___________
```

---

### Phase 2: Component & Mock Testing (Mid Development)

#### Aktivitas QA saat Backend/Frontend belum ready:

1. **API Contract Testing**
   - Test API specifications menggunakan mock
   - Validate request/response format
   - Test error responses
   - Performance testing pada API level

2. **Frontend Unit Testing Support**
   - Test UI components dengan mock backend
   - Create component test scenarios
   - Test state management
   - Validate error handling

3. **Backend Contract Testing**
   - Test business logic dengan mock data
   - Validate database operations
   - Test error scenarios
   - Performance profiling

#### Template Mock Testing Strategy:
```
MOCK TESTING PLAN

Component: ___________
Status: Backend [ ] Ready [ ] Not Ready | Frontend [ ] Ready [ ] Not Ready

MOCK SERVICES REQUIRED:
1. [Service Name]
   - Endpoint: ___________
   - Mock Response: ___________
   - Error Scenarios: ___________
   - Performance Profile: ___________

2. [Service Name]
   - Endpoint: ___________
   - Mock Response: ___________
   - Error Scenarios: ___________
   - Performance Profile: ___________

TEST SCENARIOS FOR MOCK ENVIRONMENT:
- [ ] Happy path with valid data
- [ ] Invalid input handling
- [ ] Network timeout scenarios
- [ ] Error response handling
- [ ] Performance thresholds
- [ ] Data validation
- [ ] Security validation

TOOLS USED:
- Mock Framework: ___________
- Test Data: ___________
- Test Execution: ___________

TRANSITION PLAN TO REAL INTEGRATION:
- Integration start date: ___________
- Regression test scope: ___________
- Environment switch strategy: ___________
```

---

### Phase 3: Integration Testing (Late Development)

#### Aktivitas QA saat Components siap diintegrasikan:

1. **End-to-End Testing**
   - Test complete user workflows
   - Database integration verification
   - Third-party service integration
   - Performance testing

2. **Compatibility Testing**
   - Cross-browser testing
   - Mobile responsiveness
   - Device compatibility
   - OS compatibility

3. **Smoke Testing**
   - Critical path validation
   - Build health check
   - Environment validation

#### Template Integration Test Plan:
```
INTEGRATION TEST PLAN

Integration Point: ___________
Date Started: ___________
Expected Completion: ___________

COMPONENTS INTEGRATED:
- [ ] Frontend
- [ ] Backend
- [ ] Database
- [ ] External APIs

CRITICAL FLOWS TO TEST:
1. [User Journey 1]
   - Prerequisites: ___________
   - Steps: ___________
   - Expected Result: ___________
   - Status: [ ] Blocked [ ] In Progress [ ] Passed [ ] Failed

2. [User Journey 2]
   - Prerequisites: ___________
   - Steps: ___________
   - Expected Result: ___________
   - Status: [ ] Blocked [ ] In Progress [ ] Passed [ ] Failed

ENVIRONMENT VALIDATION:
- [ ] Database connectivity
- [ ] Backend services running
- [ ] Frontend deployed
- [ ] External APIs accessible
- [ ] Logs accessible
- [ ] Monitoring active

ISSUES FOUND:
ID | Issue | Severity | Blocker | Status
---|-------|----------|---------|-------

SIGN-OFF:
QA Lead: _____________ Date: _______
Dev Lead: _____________ Date: _______
```

---

## Testing Scenarios Ketika Backend/Frontend Belum Ready

### Scenario 1: Backend Belum Ready, Frontend Sudah

**Strategi:**
```
FRONTEND TESTING ONLY

WHAT WE CAN TEST:
✓ UI rendering & layout
✓ Component functionality (with mocks)
✓ Form validation logic
✓ Navigation flows
✓ State management
✓ Error message displays
✓ Responsive design
✓ Accessibility (a11y)
✓ Performance (frontend metrics)
✓ Browser compatibility

WHAT WE CANNOT TEST:
✗ Real API integration
✗ Database operations
✗ Backend validation
✗ Data persistence
✗ Security at backend level
✗ End-to-end workflows (requiring backend)

MOCK STRATEGY:
- Use tools: Postman Mock Server, MSW (Mock Service Worker), Mirage.js
- Mock API responses
- Mock error scenarios
- Create realistic test data
- Simulate network delays

TESTING CHECKLIST:
- [ ] All UI components render correctly
- [ ] Form inputs accept valid data
- [ ] Form validation rejects invalid data
- [ ] Error messages display appropriately
- [ ] Loading states show correctly
- [ ] Navigation works as expected
- [ ] Responsive design on all breakpoints
- [ ] Accessibility compliance checked
- [ ] Console errors checked
- [ ] Performance metrics acceptable

DOCUMENTATION FOR BACKEND TEAM:
- API contract expectations
- Expected request format
- Expected response format
- Error response requirements
- Performance expectations
```

### Scenario 2: Frontend Belum Ready, Backend Sudah

**Strategi:**
```
BACKEND TESTING ONLY

WHAT WE CAN TEST:
✓ API endpoints
✓ Request/response validation
✓ Database operations
✓ Business logic
✓ Error handling
✓ Performance
✓ Security
✓ Data validation
✓ Authentication/Authorization
✓ Integration with external services

WHAT WE CANNOT TEST:
✗ UI rendering
✗ User workflows (visual)
✗ Responsive design
✗ Browser compatibility
✗ End-to-end user experience

TESTING TOOLS:
- Postman / Insomnia (API testing)
- REST Client
- Database query tools
- Load testing tools (JMeter, LoadRunner)
- Security tools (OWASP ZAP)

API TESTING CHECKLIST:
- [ ] All endpoints accessible
- [ ] HTTP methods correct
- [ ] Request body validation
- [ ] Response status codes correct
- [ ] Response format correct
- [ ] Error responses meaningful
- [ ] Authentication working
- [ ] Authorization enforced
- [ ] Rate limiting working
- [ ] Input sanitization working
- [ ] Performance acceptable

DATABASE TESTING CHECKLIST:
- [ ] Data inserted correctly
- [ ] Data updated correctly
- [ ] Data deleted correctly
- [ ] Constraints enforced
- [ ] Transactions working
- [ ] Rollback working
- [ ] Data integrity maintained

SECURITY TESTING CHECKLIST:
- [ ] SQL injection prevented
- [ ] XSS prevention working
- [ ] CSRF protection enabled
- [ ] Authentication secure
- [ ] Authorization correct
- [ ] Sensitive data encrypted
- [ ] API keys secured
```

### Scenario 3: Keduanya Belum Ready

**Strategi:**
```
UNIT & DESIGN REVIEW TESTING

WHAT WE CAN TEST:
✓ Requirements clarity
✓ Design feasibility
✓ Test case design
✓ Mock/Stub design
✓ Architecture review
✓ Test automation framework setup
✓ Performance benchmarks (theory)
✓ Security requirements review

ACTIVITIES:
1. COMPREHENSIVE REQUIREMENTS REVIEW
   - Create detailed test matrices
   - Define edge cases
   - Document test data requirements
   - Plan automation approach

2. DESIGN WALKTHROUGH
   - Review system architecture
   - Check design against requirements
   - Identify testing challenges
   - Plan testing approach

3. TEST FRAMEWORK SETUP
   - Setup test automation framework
   - Create base test utilities
   - Design test data factory
   - Setup CI/CD for tests

4. DOCUMENTATION
   - Create comprehensive test plan
   - Document test cases
   - Create test data specifications
   - Document risk assessment

5. TEAM COLLABORATION
   - Regular sync meetings
   - Share test cases with dev team
   - Get feedback on testability
   - Plan integration points

PREPARATION CHECKLIST:
- [ ] 100% of requirements documented
- [ ] All test cases designed
- [ ] Test data specifications ready
- [ ] Test automation framework ready
- [ ] Mock/Stub interfaces defined
- [ ] Performance baselines set
- [ ] Security requirements documented
- [ ] Compliance matrix created
- [ ] Risk assessment completed
- [ ] Resource allocation confirmed

RISK MITIGATION:
- Early identification of testing gaps
- Clear communication with dev team
- Well-defined acceptance criteria
- Comprehensive mock/stub strategy
- Robust test automation framework
```

---

## Shift Left Testing Best Practices

### 1. **Early Involvement**
- QA dalam kick-off meeting
- QA review requirements sebelum development
- QA design tests sebelum coding dimulai
- QA identify risks early

### 2. **Clear Communication**
- Regular sync dengan dev team
- Share test cases & expectations early
- Discuss blockers & dependencies
- Feedback loop yang aktif

### 3. **Test Automation Focus**
- Automate early for regression testing
- Use CI/CD pipelines
- Automate mock/stub testing
- Continuous validation

### 4. **Risk-Based Testing**
- Prioritize high-risk features
- Test critical paths first
- Focus on likely failure areas
- Allocate resources by risk

### 5. **Mock & Stub Strategy**
- Define realistic mocks
- Cover error scenarios
- Simulate performance characteristics
- Easy transition to real integration

### 6. **Documentation**
- Keep test cases updated
- Document assumptions & dependencies
- Create testing checklists
- Maintain traceability matrix

### 7. **Collaboration**
- Include devs in test case review
- Get architectural input early
- Discuss testability concerns
- Plan integration approach

---

## Shift Left Testing Checklist

```
PRE-DEVELOPMENT PHASE
- [ ] Requirements clearly documented
- [ ] Test strategy created
- [ ] Risk assessment completed
- [ ] Resource plan finalized
- [ ] Acceptance criteria defined
- [ ] Dependencies identified

EARLY DEVELOPMENT PHASE
- [ ] Test cases designed
- [ ] Mock/Stub strategy planned
- [ ] Test framework setup
- [ ] Test data prepared
- [ ] Environment configured
- [ ] CI/CD pipeline ready

MID DEVELOPMENT PHASE
- [ ] Component testing done
- [ ] Mock testing validated
- [ ] API contracts tested
- [ ] Unit test coverage good
- [ ] No critical blockers
- [ ] Performance baseline set

LATE DEVELOPMENT PHASE
- [ ] Integration testing started
- [ ] End-to-end workflows tested
- [ ] Regression testing automated
- [ ] Performance validated
- [ ] Security validated
- [ ] Compatibility checked

READINESS CRITERIA
- [ ] 95%+ test pass rate
- [ ] All critical bugs fixed
- [ ] Performance meets requirements
- [ ] Security requirements met
- [ ] Accessibility compliant
- [ ] Documentation complete
```

---

## Tools untuk Shift Left Testing

### Test Design & Collaboration
- **Confluence**: Documentation & requirements
- **Jira**: Test case & issue management
- **TestRail**: Test management & execution

### Mock & Stub
- **Postman**: API mocking & testing
- **MSW (Mock Service Worker)**: Frontend mocking
- **Mirage.js**: Data mocking for frontend
- **WireMock**: API stubbing

### API Testing
- **Postman**: Request/response testing
- **REST Client**: API validation
- **Swagger/OpenAPI**: Contract testing
- **SoapUI**: API testing

### Automation
- **Selenium**: Web UI automation
- **Cypress**: E2E testing
- **Jest/Mocha**: Unit testing
- **Pytest**: Backend API testing

### Performance
- **JMeter**: Load testing
- **Lighthouse**: Performance audit
- **WebPageTest**: Performance analysis
- **Gatling**: Performance testing

### Security
- **OWASP ZAP**: Security scanning
- **Burp Suite**: Web security testing
- **SonarQube**: Code quality & security

---

## Template: Shift Left Testing Report

```
SHIFT LEFT TESTING PROGRESS REPORT

Project: ___________
Period: ___________
Prepared by: ___________

EXECUTIVE SUMMARY
- Overall Status: [ ] On Track [ ] At Risk [ ] Off Track
- Key Achievements: ___________
- Key Challenges: ___________

TESTING PHASE STATUS
Pre-Development:
- [ ] Complete
- Progress: ____%
- Issues: ___________

Early Development:
- [ ] Complete
- Progress: ____%
- Issues: ___________

Mid Development:
- [ ] Complete
- Progress: ____%
- Issues: ___________

Late Development:
- [ ] Complete
- Progress: ____%
- Issues: ___________

TEST COVERAGE
- Requirements Coverage: ____%
- Code Coverage: ____%
- Critical Path Coverage: ____%
- Risk Area Coverage: ____%

DEFECTS SUMMARY
Total Found: ___
Critical: ___ | High: ___ | Medium: ___ | Low: ___
Fixed: ___
Open: ___

AUTOMATION PROGRESS
- Test Cases Automated: ___
- Regression Tests: ___
- CI/CD Integration: [ ] Yes [ ] No
- Execution Time: ___ min

BLOCKERS & DEPENDENCIES
1. ___________
   Impact: ___________
   Resolution: ___________
   ETA: ___________

2. ___________
   Impact: ___________
   Resolution: ___________
   ETA: ___________

RESOURCE UTILIZATION
- QA Engineers: ___ / ___
- Test Automation: ___ hours
- Manual Testing: ___ hours
- Overtime: ___ hours

RECOMMENDATIONS
1. ___________
2. ___________
3. ___________

NEXT STEPS
- [ ] Continue current testing phase
- [ ] Move to next phase
- [ ] Adjust strategy
- [ ] Escalate issues

SIGN-OFF
QA Lead: _____________ Date: _______
Project Manager: _____________ Date: _______
```

---

## Kesimpulan

Shift Left Testing adalah strategi proaktif yang melibatkan QA sejak awal SDLC. Dengan mengikuti template ini, tim dapat:

✅ Mendeteksi issues lebih awal  
✅ Mengurangi rework  
✅ Meningkatkan kualitas  
✅ Mempercepat delivery  
✅ Kolaborasi lebih baik  

**Key Success Factors:**
- Early involvement & planning
- Clear communication & collaboration
- Mock/Stub strategy yang jelas
- Test automation focus
- Risk-based approach
- Continuous feedback loop
