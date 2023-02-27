const { size, forEach } = require('lodash');

exports.saveData = (model, data) => {
    return model.create(data);
};

exports.insertManyData = (model, data) => {
    return model.insertMany(data);
};


exports.remove = (model, criteria,options={}) => {
    return model.deleteMany(criteria);
};

exports.updateData = (model, criteria, updateData, options = {}) => {
    options.new = true;
    return model.findOneAndUpdate(criteria, updateData, options);
};

exports.upsertData = (model, criteria, updateData, options = {}) => {
    options.new = true;
    options.upsert= true;
    options.setDefaultsOnInsert= true;
    return model.findOneAndUpdate(criteria, updateData, options);
};

exports.getData = (model, options = {}) => {
    let query = model.find(options.query || {});
    if (options.fields && size(options.fields)) {
        query = query.select(options.fields.join(' '));
    }
    if (options.sort) {
        query = query.sort(options.sort);
    }
    if (options.lean) {
        query = query.lean();
    }
    if (options.populates && size(options.populates)) {
        forEach(options.populates, (populate) => {
            query = query.populate(populate);
        });
    }
    const { pageSize, pageNo } = options;
    let skip =(pageNo-1)*pageSize;
    return query.skip(skip).limit(pageSize);

}; 

exports.getCount = (model, query) => {
    return model.countDocuments(query);
};