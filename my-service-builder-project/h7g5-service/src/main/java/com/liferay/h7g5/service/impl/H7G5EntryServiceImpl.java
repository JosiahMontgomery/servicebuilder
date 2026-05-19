package com.liferay.h7g5.service.impl;

import com.liferay.h7g5.service.H7G5EntryService;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.portal.kernel.service.ServiceContextThreadLocal;
import com.liferay.h7g5.model.H7G5Entry;
import com.liferay.h7g5.service.base.H7G5EntryServiceBaseImpl;
import com.liferay.portal.aop.AopService;
import com.liferay.portal.kernel.exception.PortalException;
import com.liferay.portal.kernel.model.User;
import com.liferay.portal.kernel.security.auth.PrincipalException;

import java.util.List;
import java.util.Objects;

import org.osgi.service.component.annotations.Component;

@Component(
    property = {
        "json.web.service.context.name=h7g5",
        "json.web.service.context.path=h7g5"
    },
    service = H7G5EntryService.class
)
public class H7G5EntryServiceImpl extends H7G5EntryServiceBaseImpl {

	public List<H7G5Entry> getEntries(String name) throws PortalException {
		User user = getUser();

		if (!Objects.equals(user.getEmailAddress(), "test@liferay.com")) {
			throw new PrincipalException("You are not test@liferay.com");
		}
	
		return h7g5EntryLocalService.getH7G5EntriesByName(name);
	}
	public H7G5Entry addH7G5Entry(String name) throws PortalException {
    	ServiceContext serviceContext = ServiceContextThreadLocal.getServiceContext();
    	return h7g5EntryLocalService.addH7G5Entry(name, serviceContext);
	}
	public List<H7G5Entry> getEntriesByDynamicQuery(String name) {
    	return h7g5EntryLocalService.getEntriesByDynamicQuery(name);
	}

}