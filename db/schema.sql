
CREATE DATABASE bordereau;

USE bordereau;

-- #Schema for bordereau synthetic data 
CREATE TABLE tblbordereau(
	BORDEREAUID bigint NOT NULL,
	REQUESTID bigint NOT NULL,
	Status varchar(10) NULL,
	SubmitDate date NULL,
	InternalAppVer varchar(25) NULL,
	InsuredName nvarchar(100) NULL,
	ProgramAdministrator varchar(3) NULL,
	PolicyNumber varchar(25) NULL,
	EffectiveDate date NULL,
	ExpirationDate date NULL,
	StatusCode varchar(100) NULL,
	TransactionDate date NULL,
	Form varchar(25) NULL,
	StreetAddress nvarchar(255) NULL,
	City varchar(100) NULL,
	County varchar(100) NULL,
	State varchar(25) NULL,
	ZIP varchar(255) NULL,
	CountryCode varchar(10) NULL,
	ISOTerritory varchar(255) NULL,
	OccupiedBy varchar(255) NULL,
	ConstructionType varchar(255) NULL,
	YearBuilt int NULL,
	YearRefurbished int NULL,
	ProtectionClass varchar(25) NULL,
	DistanceToWater varchar(100) NULL,
	AlarmFlag varchar(100) NULL,
	NumWindLosses varchar(100) NULL,
	NumNonWindLosses varchar(50) NULL,
	SqFootage int NULL,
	NumStories varchar(25) NULL,
	PrimaryFloodCoveredFlag varchar(25) NULL,
	WSDedType varchar(25) NULL,
	WSDedPerc float NULL,
	AOPDed float NULL,
	EQDedPerc float NULL,
	HOCovLim_A float NULL,
	HOCovLim_B float NULL,
	HOCovLim_C float NULL,
	HOCovLim_D float NULL,
	HOCovLim_E float NULL,
	HOCovLim_F float NULL,
	RoofAge varchar(100) NULL,
	RoofType varchar(100) NULL,
	OpeningProtection varchar(100) NULL,
	RoofConnection varchar(100) NULL,
	RoofSheathing varchar(100) NULL,
	WSVAR float NULL,
	TotalPremium float NULL,
	CommissionPcnt float NULL,
	NetDueCompany float NULL,
	Active int NULL,
    PRIMARY KEY (BORDEREAUID)
); 

-- #Schema for comments synthetic data 
CREATE TABLE tblcomments(
     BORDEREAUID bigint NOT NULL,
     COMMENTS varchar(255),
     PRIMARY KEY (BORDEREAUID)
);


--#Schema for user validation table
CREATE TABLE IF NOT EXISTS userauth (
	user VARCHAR(20) NOT NULL, 
    user_password VARCHAR(20) NOT NULL,
    PRIMARY KEY(user)
    );