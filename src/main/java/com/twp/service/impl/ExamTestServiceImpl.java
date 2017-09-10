package com.twp.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.twp.dao.ExamTestDao;
import com.twp.entity.ExamTestEntity;
import com.twp.service.ExamTestService;



@Service("examTestService")
public class ExamTestServiceImpl implements ExamTestService {
	@Autowired
	private ExamTestDao examTestDao;
	
	@Override
	public ExamTestEntity queryObject(Integer id){
		return examTestDao.queryObject(id);
	}
	
	@Override
	public List<ExamTestEntity> queryList(Map<String, Object> map){
		return examTestDao.queryList(map);
	}
	
	@Override
	public int queryTotal(Map<String, Object> map){
		return examTestDao.queryTotal(map);
	}
	
	@Override
	public void save(ExamTestEntity examTest){
		examTestDao.save(examTest);
	}
	
	@Override
	public void update(ExamTestEntity examTest){
		examTestDao.update(examTest);
	}
	
	@Override
	public void delete(Integer id){
		examTestDao.delete(id);
	}
	
	@Override
	public void deleteBatch(Integer[] ids){
		examTestDao.deleteBatch(ids);
	}
	
}