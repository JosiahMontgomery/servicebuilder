/**
 * SPDX-FileCopyrightText: (c) 2026 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

package com.liferay.h7g5.service.impl;

import com.liferay.portal.kernel.dao.orm.DynamicQuery;
import com.liferay.portal.kernel.dao.orm.DynamicQueryFactoryUtil;
import com.liferay.portal.kernel.dao.orm.PropertyFactoryUtil;
import com.liferay.portal.kernel.service.ServiceContext;
import com.liferay.h7g5.model.H7G5Entry;
import com.liferay.h7g5.service.base.H7G5EntryLocalServiceBaseImpl;
import com.liferay.portal.aop.AopService;

import java.util.List;

import org.osgi.service.component.annotations.Component;

/**
 * @author Brian Wing Shun Chan
 */
@Component(
    property = "model.class.name=com.liferay.h7g5.model.H7G5Entry",
    service = AopService.class
)
public class H7G5EntryLocalServiceImpl extends H7G5EntryLocalServiceBaseImpl {

    public List<H7G5Entry> getH7G5EntriesByName(String name) {
        return h7g5EntryPersistence.findByName(name);
    }
    public H7G5Entry addH7G5Entry(String name, ServiceContext serviceContext) {
        long id = counterLocalService.increment();
        H7G5Entry entry = h7g5EntryPersistence.create(id);
        entry.setName(name);
        return h7g5EntryPersistence.update(entry);
    }
    public List<H7G5Entry> getEntriesByDynamicQuery(String name) {
        DynamicQuery dynamicQuery = DynamicQueryFactoryUtil.forClass(H7G5Entry.class, getClassLoader());
        dynamicQuery.add(PropertyFactoryUtil.forName("name").eq(name));
        return h7g5EntryPersistence.findWithDynamicQuery(dynamicQuery);
    }
}