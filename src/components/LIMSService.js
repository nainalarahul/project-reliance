import React from 'react';

const LIMSService = () => {

    const DefaultRef = React.useRef();
    const MicrosoftAspNetCoreRef = React.useRef();
    const AllowedHostsRef = React.useRef();
    const CorsOriginRef = React.useRef();
    const NameRef = React.useRef();
    const OpenApiTitleRef = React.useRef();
    const OpenApiVersionRef = React.useRef();
    const TermsOfServiceRef = React.useRef();
    const OpenApiDescRef = React.useRef();
    const OpenApiContactEmailRef = React.useRef();
    const OpenApiContactNameRef = React.useRef();
    const OpenApiContactUrlRef = React.useRef();
    const OpenApiLicenseNameRef = React.useRef();
    const OpenApiLicenseUrlRef = React.useRef();
    const BizOwnerRef = React.useRef();
    const BizOwnerMailRef = React.useRef();
    const EndPointSecuritySchemeRef = React.useRef();
    const EndPointSecurityAuthTypeRef = React.useRef();
    const EndPointSecurityUsernameRef = React.useRef();
    const TagsRef = React.useRef();
    const EndPointSecurityPasswordRef = React.useRef();
    const TechOwnerRef = React.useRef();
    const TechOwnerMailRef = React.useRef();
    const TiersCollectionRef = React.useRef();
    const VisibilityRef = React.useRef();
    const CorsAllowOriginsRef = React.useRef();
    const CorsAllowHeadersRef = React.useRef();
    const LoginRef = React.useRef();
    const PostLimsRef = React.useRef();
    const SslCallbackRef = React.useRef();
    const GranttypeRef = React.useRef();
    const ClientIdRef = React.useRef();
    const ClientSecretRef = React.useRef();
    const ScopeRef = React.useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const obj = {Logging:{LogLevel:
        {
        Default : DefaultRef.current.value,
        MicrosoftAspNetCore: MicrosoftAspNetCoreRef.current.value,
        }
        },
        CORSOrigin: CorsOriginRef.current.value,
        AllowedHosts: AllowedHostsRef.current.value,
        Name: NameRef.current.value,
        OpenApiTitle: OpenApiTitleRef.current.value,
        OpenApiVersion: OpenApiVersionRef.current.value,
        TermsOfService: TermsOfServiceRef.current.value,
        OpenApiDesc: OpenApiDescRef.current.value,
        OpenApiContactEmail: OpenApiContactEmailRef.current.value,
        OpenApiContactName: OpenApiContactNameRef.current.value,
        OpenApiContactUrl: OpenApiContactUrlRef.current.value,
        OpenApiLicenseName: OpenApiLicenseNameRef.current.value,
        OpenApiLicenseUrl: OpenApiLicenseUrlRef.current.value,
        SwaggerExtraInfo:{
            bizOwner: BizOwnerRef.current.value,
            bizOwnerMail: BizOwnerMailRef.current.value,
            endPointSecurityScheme: EndPointSecuritySchemeRef.current.value,
            endPointSecurityAuthType: EndPointSecurityAuthTypeRef.current.value,
            endPointSecurityUsername: EndPointSecurityUsernameRef.current.value,
            tags: TagsRef.current.value,
            endPointSecurityPassword: EndPointSecurityPasswordRef.current.value,
            techOwner: TechOwnerRef.current.value,
            techOwnerMail: TechOwnerMailRef.current.value,
            tiersCollection: TiersCollectionRef.current.value,
            visibility: VisibilityRef.current.value,
            CORSAllowOrigins: CorsAllowOriginsRef.current.value,
            CORSAllowHeaders: CorsAllowHeadersRef.current.value,
        },
        Uris:{
         Login:LoginRef.current.value,
         PostLims: PostLimsRef.current.value,
         sslCallback: SslCallbackRef.current.value,
        },
        RIL_Client_Details:{
        grant_type: GranttypeRef.current.value,
        clientId: ClientIdRef.current.value,
        clientSecret: ClientSecretRef.current.value,
        scope: ScopeRef.current.value,
        }
    };
        console.log(obj);
        const link = document.createElement('a');
        const url = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(obj))}`
        link.href = url;
        link.download = 'appsettings.json';
        link.click();
    }

    return (
        <form onSubmit={submitHandler}  >
            <label htmlFor='Default'>Default</label>
            <input type='text' id='Default' defaultValue= "Information" ref={DefaultRef} /><br />

            <label htmlFor='MicrosoftAspNetCore'>MicrosoftAspNetCore</label>
            <input type='text' id='MicrosoftAspNetCore' defaultValue= "Warning" ref={MicrosoftAspNetCoreRef} /><br />

            <label htmlFor='CORSOrigin'>CORSOrigin</label>
            <input type='text' id='Default' defaultValue= "https://all the urls there are" ref={CorsOriginRef} /><br />

            <label htmlFor='AllowedHosts'>AllowedHosts</label>
            <input type='text' id='AllowedHosts' defaultValue= "*" ref={AllowedHostsRef} /><br />

            <label htmlFor='Name'>Name</label>
            <input type='text' id='Name' defaultValue= "Information" ref={NameRef} /><br />

            <label htmlFor='OpenApiTitle'>OpenApiTitle</label>
            <input type='text' id='OpenApiTitle' defaultValue= "AIMAPI_NC_LIMSSerivceIntegration" ref={OpenApiTitleRef} /><br />

            <label htmlFor='OpenApiVersion'>OpenApiVersion</label>
            <input type='text' id='OpenApiVersion' defaultValue= "1.0.0" ref={OpenApiVersionRef} /><br />

            <label htmlFor='TermsOfService'>TermsOfService</label>
            <input type='text' id='TermsOfService' defaultValue= "http://ril.com" ref={TermsOfServiceRef} /><br />

            <label htmlFor='OpenApiDesc'>OpenApiDesc</label>
            <input type='text' id='OpenApiDesc' defaultValue= "Api description" ref={OpenApiDescRef} /><br />

            <label htmlFor='OpenApiContactEmail'>OpenApiContactEmail</label>
            <input type='text' id='OpenApiContactEmail' defaultValue= "ravi.ippili@ril.com" ref={OpenApiContactEmailRef} /><br />

            <label htmlFor='OpenApiContactName'>OpenApiContactName</label>
            <input type='text' id='OpenApiContactName' defaultValue= "Ravi Ippili" ref={OpenApiContactNameRef} /><br />

            <label htmlFor='OpenApiContactUrl'>OpenApiContactUrl</label>
            <input type='text' id='OpenApiContactUrl' defaultValue= "http://ril.com" ref={OpenApiContactUrlRef} /><br />

            <label htmlFor='OpenApiLicenseName'>OpenApiLicenseName</label>
            <input type='text' id='OpenApiLicenseName' defaultValue= "Apache License Version 2.0" ref={OpenApiLicenseNameRef} /><br />

            <label htmlFor='OpenApiLicenseUrl'>OpenApiLicenseUrl</label>
            <input type='text' id='OpenApiLicenseUrl' defaultValue= "http://www.apache.org/licenses/LICENSE_2.0" ref={OpenApiLicenseUrlRef} /><br />

            <label htmlFor='bizOwner'>bizOwner</label>
            <input type='text' id='bizOwner' defaultValue= "Information" ref={BizOwnerRef} /><br />

            <label htmlFor='bizOwnerMail'>bizOwnerMail</label>
            <input type='text' id='bizOwnerMail' defaultValue= "Information" ref={BizOwnerMailRef} /><br />

            <label htmlFor='endPointSecurityScheme'>endPointSecurityScheme</label>
            <input type='text' id='endPointSecurityScheme' defaultValue= "Information" ref={EndPointSecuritySchemeRef} /><br />
            
            <label htmlFor='endPointSecurityAuthType'>endPointSecurityAuthType</label>
            <input type='text' id='endPointSecurityAuthType' defaultValue= "Information" ref={EndPointSecurityAuthTypeRef} /><br />

            <label htmlFor='endPointSecurityUsername'>endPointSecurityUsername</label>
            <input type='text' id='endPointSecurityUsername' defaultValue= "Information" ref={EndPointSecurityUsernameRef} /><br />

            <label htmlFor='tags'>tags</label>
            <input type='text' id='tags' defaultValue="" ref={TagsRef} /><br />

            <label htmlFor='endPointSecurityPassword'>endPointSecurityPassword</label>
            <input type='text' id='endPointSecurityPassword' defaultValue="" ref={EndPointSecurityPasswordRef} /><br />

            <label htmlFor='techOwner'>techOwner</label>
            <input type='text' id='techOwner' defaultValue="" ref={TechOwnerRef} /><br />

            <label htmlFor='techOwnerMail'>techOwnerMail</label>
            <input type='text' id='techOwnerMail' defaultValue="" ref={TechOwnerMailRef} /><br />

            <label htmlFor='tiersCollection'>tiersCollection</label>
            <input type='text' id='tiersCollection' defaultValue="" ref={TiersCollectionRef} /><br />


            <label htmlFor='visibility'>visibility</label>
            <input type='text' id='visibility' defaultValue="" ref={VisibilityRef} /><br />

            <label htmlFor='CORSAllowOrigins'>CORSAllowOrigins</label>
            <input type='text' id='CORSAllowOrigins' defaultValue="" ref={CorsAllowOriginsRef} /><br />

            <label htmlFor='CorsAllowHeaders'>CorsAllowHeaders</label>
            <input type='text' id='CorsAllowHeaders' defaultValue="" ref={CorsAllowHeadersRef} /><br />

            <label htmlFor='Login'>Login</label>
            <input type='text' id='Login' defaultValue="" ref={LoginRef} /><br />

            <label htmlFor='PostLims'>PostLims</label>
            <input type='text' id='PostLims' defaultValue="" ref={PostLimsRef} /><br />

            <label htmlFor='sslCallback'>sslCallback</label>
            <input type='text' id='sslCallback' defaultValue="" ref={SslCallbackRef} /><br />
        
            <label htmlFor='grant_type'>grant_type</label>
            <input type='text' id='grant_type' defaultValue="" ref={GranttypeRef} /><br />

            <label htmlFor='clientId'>clientId</label>
            <input type='text' id='clientId' defaultValue="" ref={ClientIdRef} /><br />

            <label htmlFor='clientSecret'>clientSecret</label>
            <input type='text' id='clientSecret' defaultValue="" ref={ClientSecretRef} /><br />

            <label htmlFor='scope'>scope</label>
            <input type='text' id='scope' defaultValue="" ref={ScopeRef} /><br />

            <button>Submit</button>
        </form>
    );
}

export default LIMSService;